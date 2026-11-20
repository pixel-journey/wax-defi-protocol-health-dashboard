import { describe, expect, it } from "vitest";
import { labels } from "./health";

describe("protocol labels", () => {
  it("names a thin book and a turnover in bps", () => {
    expect(labels(1000, 100, 2)).toEqual({ turnoverBps: 1000, tags: ["few-lps"] });
  });

  it("does not divide by zero TVL", () => {
    expect(labels(0, 5, 4)).toEqual({ turnoverBps: null, tags: ["volume-without-tvl"] });
    expect(labels(0, 0, 2)).toEqual({ turnoverBps: null, tags: ["few-lps"] });
  });

  it("marks three LPs as enough, zero turnover, and volume at or above TVL", () => {
    expect(labels(1000, 100, 3)).toEqual({ turnoverBps: 1000, tags: [] });
    expect(labels(1000, 0, 4)).toEqual({ turnoverBps: 0, tags: ["no-turnover"] });
    expect(labels(100, 100, 4)).toEqual({ turnoverBps: 10_000, tags: ["volume-above-tvl"] });
    expect(labels(100, 200, 4)).toEqual({ turnoverBps: 20_000, tags: ["volume-above-tvl"] });
  });
});
