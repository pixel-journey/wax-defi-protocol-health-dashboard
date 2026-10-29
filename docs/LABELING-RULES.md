# Labeling Rules

**Trust label:** `educational-reference`  
**Repo:** `wax-defi-protocol-health-dashboard`

---

## Purpose

Document the pure `labels(tvl, volume, lps)` function: how turnover is computed, which tags fire, and what this package deliberately does **not** claim.

A label is **not** a rating and **not** a suggestion to deposit.

---

## Inputs (arguments only)

| Input | Bounds | Meaning in this educational framing |
|-------|--------|-------------------------------------|
| `tvl` | integer 0 … 1e12 | Total value locked proxy |
| `volume` | integer 0 … 1e12 | Volume over the same conceptual window |
| `lps` | integer 0 … 1e6 | Liquidity provider count |

No pool is read. No Hyperion call happens inside `labels`.

---

## Turnover in basis points

When `tvl > 0`:

$$
\text{turnoverBps} = \left\lfloor \frac{\text{volume} \times 10\,000}{\text{tvl}} \right\rfloor
$$

When `tvl === 0`:

$$
\text{turnoverBps} = \texttt{null}
$$

(Division by zero is avoided; volume-without-tvl may still tag.)

---

## Tag catalog

| Tag | Condition |
|-----|-----------|
| `few-lps` | `lps < 3` |
| `volume-without-tvl` | `tvl === 0` and `volume > 0` |
| `no-turnover` | `tvl > 0` and `turnoverBps === 0` |
| `volume-above-tvl` | `tvl > 0` and `turnoverBps >= 10_000` |

Tags are collected, then **sorted** alphabetically before return.

---

## Canonical example (unit-tested)

```ts
labels(1000, 100, 2)
// → { turnoverBps: 1000, tags: ["few-lps"] }
```

- 100 / 1000 × 10_000 = 1000 bps
- 2 LPs → `few-lps`

---

## Zero-TVL example (unit-tested)

```ts
labels(0, 5, 4)
// → { turnoverBps: null, tags: ["volume-without-tvl"] }
```

---

## Other illustrative cases

```ts
labels(1000, 0, 10)
// turnoverBps 0 → tags include "no-turnover"

labels(1000, 10_000, 5)
// turnoverBps 100_000 → tags include "volume-above-tvl"

labels(1000, 100, 10)
// turnoverBps 1000, tags [] (no few-lps)
```

---

## What this is not

| Non-claim | Why |
|-----------|-----|
| Full protocol health dashboard | Only three integers in, tags out |
| Loyalty scorecard | See `wax-defi-loyalty-health-scorecard` |
| Live TVL/volume feed | Argument-only |
| Investment advice | Labels are descriptive teaching aids |

---

## Classroom prompts

1. Why is `turnoverBps` null when TVL is zero instead of zero or infinity?
2. When would `volume-above-tvl` be expected in a healthy market vs. a data glitch?
3. How would you compose these labels with *separately fetched* TVL/volume without overclaiming this package?

---

*Pixel Journey — Tag the numbers you have; do not invent the pool.*
