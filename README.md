# wax-defi-protocol-health-dashboard

> **Trust Label:** `educational-reference`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Educational pure-function reference + Deep documentation pass  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Derive simple, explainable health-style **labels** from three integer arguments — TVL, volume, and LP count — without reading any pool or claiming a full protocol-health system.

**Core rule (do not weaken):**  
The numbers are arguments. No pool is read. Tags such as `few-lps`, `volume-without-tvl`, `no-turnover`, and `volume-above-tvl` are produced only from the three integers you pass. This is not `wax-defi-loyalty-health-scorecard`.

---

## Deep educational documentation

| Guide | What it teaches |
|-------|-----------------|
| [docs/LABELING-RULES.md](docs/LABELING-RULES.md) | Turnover formula, full tag catalog, non-claims, review prompts |
| [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md) | Thin book, zero TVL, no-turnover, volume-above-tvl scenarios |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Layers, honesty boundaries |

---

## 1. Overview & Goal

Protocol “health” language is often overloaded. This blueprint isolates a small, testable labeling function so learners can see turnover in bps, sparse LP tags, and volume-without-TVL cases — without live data access or loyalty-scorecard claims.

**Success metrics:**
- Unit tests lock few-lps + 1000 bps and zero-TVL behavior
- Request builders stay pure (`executed: false`)
- Docs never claim a full mainnet health dashboard

---

## 2. Concepts

- Argument-only labels
- Turnover: `floor(volume * 10000 / tvl)` when TVL > 0; else `null`
- Tags: `few-lps`, `volume-without-tvl`, `no-turnover`, `volume-above-tvl` (sorted)
- Neighbor: `wax-defi-loyalty-health-scorecard` (different question)

---

## 3. Design & pieces

| Piece | Role |
|-------|------|
| `src/health.ts` | Pure `labels` |
| `src/health.test.ts` | Canonical + zero-TVL cases |
| `src/api.ts` / `usecases.ts` | Unsent builders |
| `docs/*` | Deep teaching guides |

---

## 4. Technical architecture

See **[ARCHITECTURE.md](ARCHITECTURE.md)** and **[docs/LABELING-RULES.md](docs/LABELING-RULES.md)**.

```
labels(tvl, volume, lps)
  → validate bounds → tags → turnoverBps or null → sorted tags
```

---

## 5. Examples

```ts
import { labels } from "./src/health";

labels(1000, 100, 2); // { turnoverBps: 1000, tags: ["few-lps"] }
labels(0, 5, 4);      // { turnoverBps: null, tags: ["volume-without-tvl"] }
```

More: [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md).

---

## 6. Demo & testing

```bash
npm install && npm test && npm run dev
```

See [VERIFICATION-LOG.md](VERIFICATION-LOG.md).

---

## 7. Roadmap

**Current (intentional):** pure labels, unsent builders, deep docs.  
**Non-goals:** live pool reads, full health dashboards, loyalty scorecards, investment advice.

---

## 8–10. Experience, related, license

Offline educational page. Related: loyalty scorecard neighbor. MIT. Pixel Journey standards.

**This blueprint labels the three integers it is given and stops there.**

*Pixel Journey — Honest interfaces and honest documentation for public blockchain data.*

---

*Last updated: 2026-10-29 — Deep educational pass: LABELING-RULES, WORKED-EXAMPLES, expanded architecture, verification log.*
