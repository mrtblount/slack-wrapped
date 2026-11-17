/** Number formatting for display strings. Hand-rolled so the output is identical in every runtime. */

/** 14203 → "14,203" (en-US grouping). */
export function formatInt(value: number): string {
  const rounded = Math.round(Number.isFinite(value) ? value : 0);
  const digits = Math.abs(rounded).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return rounded < 0 ? `-${digits}` : digits;
}

/** 3.14 → "3.1", 38.4 → "38": one decimal below ten, whole numbers from ten up. */
export function formatAverage(value: number): string {
  const v = Number.isFinite(value) ? value : 0;
  return v < 9.95 ? v.toFixed(1) : formatInt(v);
}

/** 1.83 → "1.8", 0.04 → "0.04": one decimal, two when the first would round to zero. */
export function formatRate(value: number): string {
  const v = Number.isFinite(value) ? value : 0;
  if (v >= 0.095 || v === 0) return v >= 99.95 ? formatInt(v) : v.toFixed(1);
  return v.toFixed(2);
}

/** 0.384 → "38%" */
export function formatPercent(share: number): string {
  const v = Number.isFinite(share) ? share : 0;
  const percent = v * 100;
  if (percent > 0 && percent < 1) return '<1%';
  return `${Math.round(percent)}%`;
}

/** "1 thread" / "240 threads" */
export function plural(count: number, singular: string, pluralForm = `${singular}s`): string {
  return `${formatInt(count)} ${Math.round(count) === 1 ? singular : pluralForm}`;
}

/** A reply delay in words: 42 → "42 sec", 240 → "4 min", 7200 → "2 hr". */
export function formatDelay(seconds: number): string {
  const s = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  if (s < 60) return `${Math.max(1, Math.round(s))} sec`;
  if (s < 3600) return `${Math.round(s / 60)} min`;
  return `${Math.round(s / 3600)} hr`;
}

export function round1(value: number): number {
  return Number.isFinite(value) ? Math.round(value * 10) / 10 : 0;
}

export function round2(value: number): number {
  return Number.isFinite(value) ? Math.round(value * 100) / 100 : 0;
}

export function round4(value: number): number {
  return Number.isFinite(value) ? Math.round(value * 10000) / 10000 : 0;
}
