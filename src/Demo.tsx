"use client";

import { labels } from "./health";

export function Demo() {
  const row = labels(1000, 100, 2);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Labels from three integers</h1>
      <p className="lede">TVL 1000, volume 100, and 2 LPs. Turnover is 1000 bps. few-lps is a label, not a rating. No pool is read.</p>
      <p>{row.turnoverBps} bps. {row.tags.join(", ")}.</p>
    </main>
  );
}
