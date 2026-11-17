# Slack workspace export format

What a Workspace Owner or Admin gets from **Admin → Workspace settings → Security → Import & export data →
Export** (or directly at `your-workspace.slack.com/services/export`; older Slack layouts reach it through the
workspace name → Tools & settings → Workspace settings). The standard export (every plan) contains public
channels only. Treat every field as optional and never crash on a missing or unexpected one.

The first version of this note was written from memory. The section "What real exports showed" at the end
lists what turned out to be different when checked against real exports from 2016 to 2023; where the two
disagree, that section wins.

## Layout of the zip

```
channels.json            public channels
users.json               every member, including bots and deactivated accounts
integration_logs.json    app install history (ignore)
canvases.json            may be present (ignore)
<channel-name>/          one folder per channel, named after the channel (not its id)
    2026-03-09.json      one file per day that has messages: a JSON array of message objects
    2026-03-10.json
```

Full exports from Business+ / Enterprise may also contain `groups.json` (private channels), `dms.json`,
`mpims.json`, with folders named by channel name (groups) or by id (DMs). Some zips wrap everything in a
single top-level folder; strip a common leading folder if `channels.json` is not at the root.
Zips of large workspaces can exceed 4 GB or 65,535 entries (Zip64).

The file name of the zip looks like `Acme Inc Slack export Jan 1 2026 - Dec 9 2026.zip`. The part before
` Slack export` is the workspace name. Nothing inside the zip states the workspace name.

## channels.json

```json
[
  {
    "id": "C04ABCD12",
    "name": "general",
    "created": 1672531200,
    "creator": "U04AAAA01",
    "is_archived": false,
    "is_general": true,
    "members": ["U04AAAA01", "U04AAAA02"],
    "topic": { "value": "", "creator": "", "last_set": 0 },
    "purpose": { "value": "Company-wide announcements.", "creator": "U04AAAA01", "last_set": 1672531200 }
  }
]
```

`created` is Unix seconds. `members` can be missing or stale.

## users.json

```json
[
  {
    "id": "U04AAAA01",
    "team_id": "T04TEAM01",
    "name": "priya",
    "deleted": false,
    "color": "9f69e7",
    "real_name": "Priya Raman",
    "tz": "America/New_York",
    "tz_label": "Eastern Standard Time",
    "tz_offset": -18000,
    "profile": {
      "title": "Head of Engineering",
      "real_name": "Priya Raman",
      "display_name": "priya",
      "first_name": "Priya",
      "last_name": "Raman",
      "image_72": "https://avatars.slack-edge.com/2023-01-01/123_abc_72.png",
      "image_192": "https://avatars.slack-edge.com/2023-01-01/123_abc_192.png",
      "team": "T04TEAM01"
    },
    "is_admin": true,
    "is_owner": false,
    "is_bot": false,
    "is_app_user": false,
    "is_restricted": false,
    "updated": 1700000000
  }
]
```

- Display name preference: `profile.display_name` if non-empty, else `real_name` / `profile.real_name`, else `name`.
- Bots: `is_bot: true`, or `id === "USLACKBOT"`. Deactivated people have `deleted: true` and usually no `tz`;
  their old messages still count.
- `tz` is an IANA zone. `tz_offset` is only the current offset, so use `tz` for time-of-day maths.

## Message objects

```json
{
  "type": "message",
  "user": "U04AAAA01",
  "ts": "1741526400.123456",
  "client_msg_id": "0b1c2d3e-...",
  "text": "Shipping <https://example.com/pr/42|the fix> now, thanks <@U04AAAA02> :tada:",
  "team": "T04TEAM01",
  "user_profile": { "display_name": "priya", "real_name": "Priya Raman", "image_72": "https://..." },
  "blocks": [ { "type": "rich_text", "elements": [ ... ] } ],
  "reactions": [ { "name": "tada", "users": ["U04AAAA02", "U04AAAA03"], "count": 2 } ],
  "edited": { "user": "U04AAAA01", "ts": "1741526460.000000" },
  "files": [ { "id": "F04FILE01", "name": "chart.png", "mimetype": "image/png", "filetype": "png" } ],
  "upload": true,
  "attachments": [ { "from_url": "https://example.com", "title": "Example", "fallback": "Example" } ],

  "thread_ts": "1741526400.123456",
  "reply_count": 3,
  "reply_users_count": 2,
  "reply_users": ["U04AAAA02", "U04AAAA03"],
  "latest_reply": "1741527000.000300",
  "replies": [ { "user": "U04AAAA02", "ts": "1741526500.000100" } ]
}
```

- `ts` is a string: Unix seconds, a dot, six digits. It doubles as the message id within a channel.
- **Threads.** A root has `thread_ts === ts` and `reply_count`. Each reply is its own message object, in the
  day file for the day it was posted, with `thread_ts` set to the root's `ts` and `parent_user_id` set to the
  root author. Replies also sent to the channel have `subtype: "thread_broadcast"`.
- **Reactions.** `name` is the shortcode without colons. Skin tones appear as `"+1::skin-tone-3"`; strip
  everything from `::`. Names not in the standard emoji set are custom workspace emoji.
- **Text markup.** `<@U…>` user mention, `<#C…|name>` channel link, `<!here>` `<!channel>` `<!everyone>`
  broadcasts, `<!subteam^S…|@group>` group mention, `<https://url|label>` or `<https://url>` links,
  `:shortcode:` emoji, HTML entities `&amp;` `&lt;` `&gt;`. Code is wrapped in backticks or triple backticks.
- **Files.** `files[].mimetype` starts with `image/` for images and GIFs. Older exports only set `upload: true`.

### Subtypes

A message with no `subtype` (or `thread_broadcast`, `me_message`, `file_share`) from a human user is a real
message. Everything below is a system event or bot output and must not count as a human message:

| subtype | meaning |
|---|---|
| `channel_join`, `channel_leave` | someone joined or left. `user` is who. Useful for join dates. |
| `channel_topic`, `channel_purpose`, `channel_name`, `channel_archive`, `channel_unarchive` | channel admin events |
| `pinned_item`, `unpinned_item` | pins |
| `bot_message` | posted by an integration. Has `bot_id`, often `username`, sometimes no `user`. |
| `bot_add`, `bot_remove` | app installed or removed |
| `reminder_add`, `joiner_notification`, `joiner_notification_for_inviter`, `sh_room_created`, `tombstone`, `channel_convert_to_private`, `channel_convert_to_public` | other system events |
| `huddle_thread` | a huddle. See below. |

Messages can also come from apps posting as a user: those carry `bot_id` (and usually `app_id`) without
`subtype: "bot_message"`. Treat any message with a `bot_id`, or whose user is a bot in `users.json`, as a bot message.

### Huddles

```json
{
  "type": "message",
  "subtype": "huddle_thread",
  "user": "USLACKBOT",
  "ts": "1741530000.000100",
  "text": "A huddle started",
  "room": {
    "id": "R04ROOM01",
    "created_by": "U04AAAA01",
    "date_start": 1741530000,
    "date_end": 1741531800,
    "participant_history": ["U04AAAA01", "U04AAAA02"],
    "has_ended": true,
    "channels": ["C04ABCD12"]
  }
}
```

Duration is `date_end - date_start` seconds when `date_end > date_start`. Credit every id in
`participant_history` with the full duration (the export has no per-person join times).

## Things that vary between exports

- Free-plan exports only reach back about a year. That is enough for a year in review.
- Channel folders exist only for channels that have messages. Archived channels are included.
- A renamed channel keeps one folder under its current name.
- Day files are grouped by date, but always trust `ts`, not the file name.
- Deleted messages are absent. Edited messages carry only their final text.
- Slack Connect channels include messages from people who are not in `users.json`; fall back to
  `user_profile` on the message for a name, and never crash on an unknown user id.

## What real exports showed

Checked against eight public repositories, four of them real exports from 2016 to 2023.

1. **Day files are cut on Pacific days.** A message sits in the file for its date in America/Los_Angeles
   (daylight-saving aware), whatever the workspace's or exporter's timezone. Between 5% and 31% of messages
   therefore sit in a file whose name is not their UTC date. Always classify by `ts`.
2. **Huddles have no subtype.** They are messages with `user: "USLACKBOT"`, empty `text`, and a `room` object
   carrying `call_family: "huddle"`. `created_by` can be missing from `participant_history`. Detect them by `room`.
3. **Files.** Since about 2020 files are in `files[]` and `upload` is usually false. Up to 2018 an upload is
   `subtype: "file_share"` with a single `file` object and generated text such as
   `<@U…|name> uploaded a file: <url|title> and commented: …`. Deleted files are `{ id, mode: "tombstone" }`.
4. **`channel_join` does not cover everyone in the general channel** in modern exports (2 of 51 people in a
   2023 export, 21 of 1,195 in a 2020 one). It cannot be the only source of join dates.
5. **Bots.** `USLACKBOT` is not listed in users.json. Old exports put `bot_id: null` on human messages. A
   `/giphy` post has a human `user` and a real `bot_id`.
6. **Smaller differences.** `created` is a string up to 2018. Extra subtypes: `reply_broadcast`,
   `file_comment` (no `user`), `channel_posting_permissions`. A `thread_broadcast` carries a full `root` copy,
   and `parent_user_id` is missing on broadcast replies and on replies to bot roots. Old markup includes
   `<@U…|name>`, `<!here|@here>` and `<!group>`. `user_profile` is absent before 2020 and on file and system
   messages. `is_general` may sit on a channel that is not called general, or on none.
