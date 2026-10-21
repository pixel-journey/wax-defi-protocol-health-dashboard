import { describe, expect, it } from "vitest";
import { labels } from "./health";

describe("protocol labels", () => {
  it("names a thin book and a turnover in bps", () => {
    expect(labels(1000, 100, 2)).toEqual({ turnoverBps: 1000, tags: ["few-lps"] });
  });

  it("does not divide by zero TVL", () => {
    expect(labels(0, 5, 4)).toEqual({ turnoverBps: null, tags: ["volume-without-tvl"] });
  });
});
