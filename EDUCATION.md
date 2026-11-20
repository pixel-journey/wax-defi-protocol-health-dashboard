# Education — three integers, four tags

> **Rung:** `npm test` passes. The numbers are arguments. No pool is read.  
> **The test is the rule.** A return count, which this file does not compute, is [wax-defi-retention-metric-suite](https://github.com/pixel-journey/wax-defi-retention-metric-suite).

## Predict, then run

Turnover is `floor(volume * 10000 / tvl)`. It is `null` when TVL is 0. Tags are sorted.

| Call | Locked result |
| --- | --- |
| TVL 1000, volume 100, 2 LPs | turnover `1000`, tag `few-lps`. Two is fewer than three. |
| TVL 1000, volume 100, 3 LPs | turnover `1000`, no tags. Three is enough. |
| TVL 0, volume 5, 4 LPs | turnover `null`, tag `volume-without-tvl` |
| TVL 0, volume 0, 2 LPs | turnover `null`, tag `few-lps`. No volume, so no volume-without-tvl. |
| TVL 1000, volume 0, 4 LPs | turnover `0`, tag `no-turnover` |
| TVL 100, volume 100, 4 LPs | turnover `10000`, tag `volume-above-tvl`. Equal is enough. |
| TVL 100, volume 200, 4 LPs | turnover `20000`, the same tag |

This is not a health grade and not a pool read.
