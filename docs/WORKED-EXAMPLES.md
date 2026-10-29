# Worked Examples

**Trust label:** `educational-reference`  
**Repo:** `wax-defi-protocol-health-dashboard`

---

## Example A — Thin book + turnover (unit-tested)

```ts
labels(1000, 100, 2)
// { turnoverBps: 1000, tags: ["few-lps"] }
```

| Input | Value |
|-------|-------|
| TVL | 1000 |
| Volume | 100 |
| LPs | 2 |
| Turnover | 1000 bps |
| Tags | few-lps |

---

## Example B — Volume without TVL (unit-tested)

```ts
labels(0, 5, 4)
// { turnoverBps: null, tags: ["volume-without-tvl"] }
```

---

## Example C — No turnover

```ts
labels(1000, 0, 10)
// { turnoverBps: 0, tags: ["no-turnover"] }
```

---

## Example D — Volume above TVL

```ts
labels(1000, 10_000, 8)
// turnoverBps = 100_000 ≥ 10_000 → tags include "volume-above-tvl"
```

---

## Example E — Multiple tags (sorted)

```ts
labels(1000, 10_000, 1)
// few-lps + volume-above-tvl → tags sorted alphabetically
```

---

## Reproduce

```ts
import { labels } from "../src/health";
console.log(labels(1000, 100, 2));
console.log(labels(0, 5, 4));
```

```bash
npm test
```

---

*Pixel Journey — Show the tags, then keep the claim small.*
