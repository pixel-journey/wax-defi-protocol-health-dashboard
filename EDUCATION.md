# Education — three integers, four tags

> **Rung:** `npm test` passes. The numbers are arguments. No pool is read.  
> **The test is the rule.** A return count, which this file does not compute, is [wax-defi-retention-metric-suite](https://github.com/pixel-journey/wax-defi-retention-metric-suite).

Official context: [docs.wax.io](https://docs.wax.io/). Rules: [docs/LABELING-RULES.md](docs/LABELING-RULES.md) · numbers: [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute turnover and name which tag fires |
| Intermediate | Explain why two LPs is `few-lps` and three is not |
| Masterclass | Refuse to call the tag list a health grade |

---

## Beginner — one scene

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

```bash
npm test
```

---

## Intermediate — tag rules

| Tag | When |
| --- | --- |
| `few-lps` | LP count **< 3** |
| `volume-without-tvl` | TVL is 0 **and** volume is positive |
| `no-turnover` | TVL is positive and volume is 0 (turnover 0) |
| `volume-above-tvl` | turnover **≥ 10000** (volume at least TVL) |

Tags can stack. TVL 0, volume 0, and 2 LPs is only `few-lps`. Do not invent `volume-without-tvl` when volume is also 0.

Division by zero is avoided: TVL 0 never computes a turnover number.

---

## Masterclass

### Common mistakes

1. Calling `few-lps` a security rating. It is a label on an integer the caller typed.  
2. Treating turnover 10000 as "healthy." It only means volume ≥ TVL in the arguments.  
3. Reading a live Alcor or Taco pool and citing this file as the scan.  
4. Mixing this with retention. Return-user bps live in the retention suite.  
5. Using floating point for `volume / tvl` and then wondering why the chain disagrees.

### What this is not

- A protocol health grade
- A TVL oracle
- A recommendation to deposit

### Exercises

1. TVL 1000, volume 100, 2 LPs — turnover and tags?  
2. Why does TVL 0 and volume 0 omit `volume-without-tvl`?  
3. Is turnover 10000 a buy signal in this lab? (No.)

---

## What this course will not teach

- A live pool read
- Retention or cohort math
- That three LPs makes a market safe
