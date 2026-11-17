/**
 * Word counting with bounded memory. Words get small integer ids so that per-person counts are
 * cheap; when the vocabulary or a person's own table grows past its cap, the rarest words are
 * forgotten. Counts are therefore approximate for rare words and exact for the common ones that
 * the stats actually show.
 */

export class Vocabulary {
  private ids = new Map<string, number>();
  words: string[] = [];
  counts: number[] = [];
  /** Every vocabulary word counted so far, including words since forgotten. */
  total = 0;

  constructor(private readonly capacity: number) {}

  get size(): number {
    return this.words.length;
  }

  get full(): boolean {
    return this.words.length >= this.capacity;
  }

  /** Counts one use of `word` and returns its id. */
  add(word: string): number {
    this.total++;
    let id = this.ids.get(word);
    if (id === undefined) {
      id = this.words.length;
      this.ids.set(word, id);
      this.words.push(word);
      this.counts.push(1);
    } else {
      this.counts[id]!++;
    }
    return id;
  }

  countOf(word: string): number {
    const id = this.ids.get(word);
    return id === undefined ? 0 : this.counts[id]!;
  }

  /**
   * Forgets the rarest words, keeping at most 60% of the capacity. Returns a table from old id to
   * new id (-1 for forgotten words) so that per-person counts can be renumbered with `remapCounts`.
   */
  compact(): Int32Array {
    const size = this.words.length;
    const keep = Math.floor(this.capacity * 0.6);
    const remap = new Int32Array(size).fill(-1);
    let threshold = 0;
    if (size > keep) {
      const sorted = Float64Array.from(this.counts).sort();
      // Everything at or below the count found at the cut is dropped.
      threshold = sorted[size - keep - 1]!;
    }
    const ids = new Map<string, number>();
    const words: string[] = [];
    const counts: number[] = [];
    for (let id = 0; id < size; id++) {
      const count = this.counts[id]!;
      if (count <= threshold) continue;
      const word = this.words[id]!;
      remap[id] = words.length;
      ids.set(word, words.length);
      words.push(word);
      counts.push(count);
    }
    this.ids = ids;
    this.words = words;
    this.counts = counts;
    return remap;
  }

  /** The `limit` most used words, best first. */
  top(limit: number): { word: string; count: number }[] {
    const best: { word: string; count: number }[] = [];
    let floor = 0;
    for (let id = 0; id < this.words.length; id++) {
      const count = this.counts[id]!;
      if (best.length >= limit && count <= floor) continue;
      best.push({ word: this.words[id]!, count });
      best.sort((a, b) => b.count - a.count || (a.word < b.word ? -1 : 1));
      if (best.length > limit) best.length = limit;
      floor = best.length >= limit ? best[best.length - 1]!.count : 0;
    }
    return best;
  }
}

/** Renumbers one person's word counts after `Vocabulary.compact`. */
export function remapCounts(counts: Map<number, number>, remap: Int32Array): Map<number, number> {
  const next = new Map<number, number>();
  for (const [id, count] of counts) {
    const mapped = remap[id];
    if (mapped !== undefined && mapped >= 0) next.set(mapped, count);
  }
  return next;
}

/** Drops the rarest entries of one person's word counts until at most 60% of `capacity` remain. */
export function pruneCounts(counts: Map<number, number>, capacity: number): void {
  const keep = Math.floor(capacity * 0.6);
  if (counts.size <= keep) return;
  const sorted = Float64Array.from(counts.values()).sort();
  const threshold = sorted[counts.size - keep - 1]!;
  for (const [id, count] of counts) {
    if (count <= threshold) counts.delete(id);
  }
}
