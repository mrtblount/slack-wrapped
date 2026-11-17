/**
 * Calendar and timezone helpers.
 *
 * Intl is slow, so it is only used to build one small offset table per timezone (one row per UTC day
 * of the period). Every message is then converted to local time with plain arithmetic.
 */

export const DAY = 86400;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** Days since 1970-01-01 for an ISO date such as "2026-03-09", or null when it is not a real date. */
export function dayNumberFromIso(iso: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const ms = Date.UTC(year, month - 1, day);
  const back = new Date(ms);
  if (back.getUTCFullYear() !== year || back.getUTCMonth() !== month - 1 || back.getUTCDate() !== day) return null;
  return ms / 86400000;
}

export function isoFromDayNumber(dayNumber: number): string {
  return new Date(dayNumber * 86400000).toISOString().slice(0, 10);
}

/** 0 = Monday ... 6 = Sunday. 1970-01-01 was a Thursday. */
export function weekdayOfDayNumber(dayNumber: number): number {
  return (((dayNumber + 3) % 7) + 7) % 7;
}

export function monthName(monthIndex: number): string {
  return MONTHS[monthIndex] ?? '';
}

export function weekdayName(weekdayIndex: number): string {
  return WEEKDAYS[weekdayIndex] ?? '';
}

/** "March 9, 2026" */
export function longDate(dayNumber: number): string {
  const d = new Date(dayNumber * 86400000);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

/** "11am", "12pm", "12am" */
export function hourLabel(hour: number): string {
  const h = ((Math.round(hour) % 24) + 24) % 24;
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}${h < 12 ? 'am' : 'pm'}`;
}

export function isValidTimeZone(zone: unknown): zone is string {
  if (typeof zone !== 'string' || zone === '') return false;
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: zone });
    return true;
  } catch {
    return false;
  }
}

/** Returns a function giving the zone's UTC offset in seconds at a UTC instant (whole seconds). */
function offsetReader(zone: string): (utcSeconds: number) => number {
  if (zone === 'UTC' || zone === 'Etc/UTC') return () => 0;
  const format = new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return (utcSeconds) => {
    let year = 1970;
    let month = 1;
    let day = 1;
    let hour = 0;
    let minute = 0;
    let second = 0;
    for (const part of format.formatToParts(utcSeconds * 1000)) {
      switch (part.type) {
        case 'year': year = Number(part.value); break;
        case 'month': month = Number(part.value); break;
        case 'day': day = Number(part.value); break;
        case 'hour': hour = Number(part.value) % 24; break;
        case 'minute': minute = Number(part.value); break;
        case 'second': second = Number(part.value); break;
      }
    }
    return Math.round(Date.UTC(year, month - 1, day, hour, minute, second) / 1000) - utcSeconds;
  };
}

/** UTC offsets of one timezone for a run of consecutive UTC days. */
export interface ZoneTable {
  zone: string;
  /** UTC day number of row 0. */
  firstDay: number;
  /** Offset in seconds at 00:00 UTC of each day. */
  dayOffset: Int32Array;
  /** For a day that contains a DST change: the UTC second it happens at. 0 when the day has none. */
  switchAt: Float64Array;
  /** The offset in force from `switchAt` on. */
  switchOffset: Int32Array;
}

/**
 * Builds the offset table for `zone` covering UTC days `firstDay..lastDay` inclusive.
 * Costs one Intl call per day plus a short binary search per DST change.
 */
export function buildZoneTable(zone: string, firstDay: number, lastDay: number): ZoneTable {
  const read = offsetReader(zone);
  const rows = Math.max(1, lastDay - firstDay + 1);
  const dayOffset = new Int32Array(rows);
  const switchAt = new Float64Array(rows);
  const switchOffset = new Int32Array(rows);
  let current = read(firstDay * DAY);
  for (let i = 0; i < rows; i++) {
    dayOffset[i] = current;
    const dayStart = (firstDay + i) * DAY;
    const next = read(dayStart + DAY);
    if (next !== current) {
      // Find the first second at which the new offset applies.
      let lo = dayStart;
      let hi = dayStart + DAY;
      while (hi - lo > 1) {
        const mid = Math.floor((lo + hi) / 2);
        if (read(mid) === current) lo = mid;
        else hi = mid;
      }
      switchAt[i] = hi;
      switchOffset[i] = next;
    }
    current = next;
  }
  return { zone, firstDay, dayOffset, switchAt, switchOffset };
}

/** The zone's UTC offset in seconds at `ts` (Unix seconds). Instants outside the table use its nearest edge. */
export function offsetAt(table: ZoneTable, ts: number): number {
  const rows = table.dayOffset.length;
  let i = Math.floor(ts / DAY) - table.firstDay;
  if (i < 0) return table.dayOffset[0]!;
  if (i >= rows) i = rows - 1;
  const at = table.switchAt[i]!;
  return at !== 0 && ts >= at ? table.switchOffset[i]! : table.dayOffset[i]!;
}
