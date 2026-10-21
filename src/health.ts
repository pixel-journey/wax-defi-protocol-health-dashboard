/**
 * Labels from TVL, volume, and LP count.
 * The numbers are arguments. No pool is read.
 */

export type Labels = { turnoverBps: number | null; tags: string[] };

export function labels(tvl: number, volume: number, lps: number): Labels {
  if (!Number.isInteger(tvl) || tvl < 0 || tvl > 1_000_000_000_000) throw new Error("tvl must be an integer from 0 to 1000000000000");
  if (!Number.isInteger(volume) || volume < 0 || volume > 1_000_000_000_000) throw new Error("volume must be an integer from 0 to 1000000000000");
  if (!Number.isInteger(lps) || lps < 0 || lps > 1_000_000) throw new Error("lps must be an integer from 0 to 1000000");
  const tags: string[] = [];
  if (lps < 3) tags.push("few-lps");
  if (tvl === 0 && volume > 0) tags.push("volume-without-tvl");
  if (tvl === 0) return { turnoverBps: null, tags };
  const turnoverBps = Math.floor((volume * 10_000) / tvl);
  if (turnoverBps === 0) tags.push("no-turnover");
  if (turnoverBps >= 10_000) tags.push("volume-above-tvl");
  tags.sort();
  return { turnoverBps, tags };
}
