import { describe, expect, it } from 'vitest';
import { STOPWORDS } from '../../src/engine/stopwords';
import { countBits, LAUGH_STYLES, TextAnalyzer, truncateText } from '../../src/engine/text';

const names: Record<string, string> = { U1: 'ann', U2: 'bob' };
const channels: Record<string, string> = { C9: 'random' };
const analyzer = new TextAnalyzer(
  { userName: (id) => names[id], channelName: (id) => channels[id] },
  new Set([...STOPWORDS, 'ann', 'bob', 'random']),
);

/** A copy of the facts, because the analyzer reuses the object it returns. */
function facts(raw: string) {
  const f = analyzer.analyze(raw);
  return { ...f, mentions: [...f.mentions], emoji: [...f.emoji], tokens: [...f.tokens] };
}

function laughs(raw: string): string[] {
  const mask = analyzer.analyze(raw).laughs;
  return LAUGH_STYLES.filter((_, index) => mask & (1 << index));
}

describe('cleaning for display', () => {
  it('resolves mentions, channels, links, entities and emoji', () => {
    expect(analyzer.display('Hey <@U1> and <@U404>, see <#C9|random> or <#C9>')).toBe('Hey @ann and @someone, see #random or #random');
    expect(analyzer.display('Shipping <https://example.com/pr/42|the fix> now :tada:')).toBe('Shipping the fix now 🎉');
    expect(analyzer.display('Docs: <https://www.example.com/a/b?c=d>')).toBe('Docs: example.com');
    expect(analyzer.display('1 &lt; 2 &amp;&amp; 3 &gt; 2')).toBe('1 < 2 && 3 > 2');
    expect(analyzer.display('&amp;lt; stays escaped once')).toBe('&lt; stays escaped once');
    expect(analyzer.display('<!here> lunch? <!subteam^S1|@design> <!date^1700000000^{date}|Nov 14>')).toBe('@here lunch? @design Nov 14');
  });

  it('uses the name carried by old-style mentions when the user is unknown', () => {
    expect(analyzer.display('<@U777|carol> uploaded it')).toBe('@carol uploaded it');
  });

  it('drops code blocks, keeps inline code readable, keeps custom emoji as typed', () => {
    expect(analyzer.display('before ```const x = 1;\nfoo()``` after')).toBe('before after');
    expect(analyzer.display('run `npm test` first :shipit:')).toBe('run npm test first :shipit:');
  });

  it('applies skin tones and leaves clock times alone', () => {
    expect(analyzer.display(':wave::skin-tone-3: at 10:30:45')).toBe('👋🏼 at 10:30:45');
  });

  it('cuts long text to the limit with an ellipsis', () => {
    const shown = analyzer.display('word '.repeat(200));
    expect(Array.from(shown)).toHaveLength(280);
    expect(shown.endsWith('…')).toBe(true);
    expect(truncateText('short', 280)).toBe('short');
    expect(Array.from(truncateText('😀'.repeat(300), 280))).toHaveLength(280);
  });
});

describe('facts', () => {
  it('counts words of prose only', () => {
    expect(facts('Hello <@U2>, shipping <https://example.com/pr/42|the fix> now :tada:').words).toBe(5);
    expect(facts('<https://example.com/just-a-link>').words).toBe(0);
    expect(facts(':tada: :tada:').words).toBe(0);
    expect(facts('```a lot of code here```').words).toBe(0);
    expect(facts('one  two\nthree — four').words).toBe(4);
    expect(facts('').words).toBe(0);
  });

  it('measures the cleaned text', () => {
    expect(facts('hi <@U1>').characters).toBe('hi @ann'.length);
  });

  it('flags questions outside links and code', () => {
    expect(facts('Are we shipping today?').question).toBe(true);
    expect(facts('see <https://example.com/search?q=1>').question).toBe(false);
    expect(facts('run `what?` now').question).toBe(false);
    expect(facts('本当ですか？').question).toBe(true);
  });

  it('counts links, mentions and broadcasts', () => {
    const f = facts('<!channel> <!here|@here> ping <@U1> <@U1> <@U2> <https://a.example> <http://b.example|b> <mailto:x@example.com|x@example.com>');
    expect(f.broadcasts).toBe(2);
    expect(f.mentions).toEqual(['U1', 'U2']);
    expect(f.links).toBe(2);
    expect(facts('<!everyone> hello').broadcasts).toBe(1);
  });

  it('keeps a bare < that is not markup', () => {
    expect(analyzer.display('if a < b and c > d')).toBe('if a < b and c > d');
    expect(facts('if a < b and c > d').links).toBe(0);
  });

  it('flags shouting: at least 8 letters, at least 80% capitals', () => {
    expect(facts('WE SHIPPED IT').shout).toBe(true);
    expect(facts('WE DID').shout).toBe(false);
    expect(facts('We Shipped It Today').shout).toBe(false);
    expect(facts('SHIPPED it TODAY FOLKS').shout).toBe(true);
    expect(facts('ЭТО ПРОСТО ОТЛИЧНО').shout).toBe(true);
    expect(facts('<@U1> :TADA: <https://EXAMPLE.COM/ABCDEFGH>').shout).toBe(false);
  });

  it('finds typed emoji, folding aliases and skin tones', () => {
    expect(facts(':thumbsup: :+1::skin-tone-4: :tada::tada:').emoji).toEqual(['+1', '+1', 'tada', 'tada']);
    expect(facts('nice 🎉 work 👍🏽').emoji).toEqual(['tada', '+1']);
    expect(facts(':party-parrot: :shipit:').emoji).toEqual(['party-parrot', 'shipit']);
  });

  it('does not mistake times, ratios or code-like text for emoji', () => {
    expect(facts('meet at 10:30:45').emoji).toEqual([]);
    expect(facts('std::vector::iterator and key:value:pair').emoji).toEqual([]);
    expect(facts('ratio 1:2:3').emoji).toEqual([]);
    expect(facts('at 10:30:tada: sharp').emoji).toEqual(['tada']);
  });

  it('builds the vocabulary from letters only, without stopwords, names, numbers, links or emoji', () => {
    expect(facts("The deploy isn't done, <@U1> said the Kubernetes rollout failed 3 times :tada: <https://example.com/kube>").tokens).toEqual([
      'deploy', 'kubernetes', 'rollout', 'failed', // "times" is a plain everyday word, so it is left out
    ]);
    expect(facts('ann and bob love random pizza').tokens).toEqual(['love', 'pizza']);
    expect(facts("the team's plan and l'équipe").tokens).toEqual(['plan', 'équipe']); // "team" is a plain everyday word
    expect(facts('q4 h2o covid19 v2').tokens).toEqual(['covid']);
  });

  it('applies stopwords from all seven languages', () => {
    for (const word of ['because', 'porque', 'você', 'beaucoup', 'nicht', 'omdat', 'anche']) {
      expect(STOPWORDS.has(word), word).toBe(true);
    }
    expect(facts('nous avons beaucoup de pizza und nicht viel Zeit').tokens).toEqual(['pizza', 'zeit']);
  });

  it('recognises thanks in several languages', () => {
    for (const raw of ['thanks!', 'Thank you so much', 'thx', 'ty', 'tysm <@U1>', 'really appreciate it', 'kudos team', 'shoutout to bob', 'shout-out', 'gracias', 'merci', 'Danke', 'obrigado', 'obrigada', 'grazie', 'bedankt']) {
      expect(facts(raw).thanks, raw).toBe(true);
    }
    for (const raw of ['thinking about it', 'party time', 'merciless', 'empty', 'kitty', '<https://example.com/thanks>']) {
      expect(facts(raw).thanks, raw).toBe(false);
    }
  });

  it('recognises laughs, once per style per message', () => {
    expect(laughs('hahaha that is great')).toEqual(['haha']);
    expect(laughs('HAHAHA haha ahaha')).toEqual(['haha']);
    expect(laughs('hehe')).toEqual(['hehe']);
    expect(laughs('lol lolol LOL')).toEqual(['lol']);
    expect(laughs('lmao lmfao')).toEqual(['lmao']);
    expect(laughs('rofl')).toEqual(['rofl']);
    expect(laughs('jajaja')).toEqual(['jaja']);
    expect(laughs('kkkk')).toEqual(['kkk']);
    expect(laughs(':joy:')).toEqual(['😂']);
    expect(laughs('😂😂😂 🤣')).toEqual(['😂', '🤣']);
    expect(laughs(':rolling_on_the_floor_laughing:')).toEqual(['🤣']);
    expect(laughs('haha lol :joy:')).toEqual(['haha', 'lol', '😂']);
    expect(countBits(analyzer.analyze('haha lol :joy:').laughs)).toBe(3);
    expect(laughs('aha, the hall has a hat and a lollipop')).toEqual([]);
    expect(facts('hahaha').tokens).toEqual([]);
  });

  it('counts Japanese text as roughly two characters per word', () => {
    expect(facts('今日はリリースします').words).toBe(5);
  });

  it('survives odd input', () => {
    expect(facts('<<>> <@> <#> <!> ::: `` ``` &amp').words).toBeGreaterThanOrEqual(0);
    expect(facts('a'.repeat(5000)).tokens).toEqual([]);
  });
});
