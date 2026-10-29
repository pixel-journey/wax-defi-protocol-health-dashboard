# wax-defi-protocol-health-dashboard

> **Trust Label:** `educational-reference`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Educational pure-function + unsent-query reference  
> **Parent Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Derive simple, explainable health-style **labels** from three integer arguments — TVL, volume, and LP count — without reading any pool or claiming a full protocol-health system.

**Core rule (do not weaken):**  
The numbers are arguments. No pool is read. Tags such as `few-lps`, `volume-without-tvl`, `no-turnover`, and `volume-above-tvl` are produced only from the three integers you pass. This is not `wax-defi-loyalty-health-scorecard`.

---

## 1. Overview & Goal

Protocol “health” language is often overloaded. This blueprint isolates a small, testable labeling function so learners can see:

- How turnover in basis points can be computed from volume and TVL
- How sparse LP participation or volume without TVL can be tagged
- How to keep those labels separate from live data access and from loyalty/scorecard work elsewhere in the catalog

**Why it matters for WAX / Antelope DeFi:**
- Simple ratio and threshold tags are easy to overclaim when mixed with live pool queries.
- Separating pure labeling from data fetching keeps educational claims honest.
- Unsent request builders remain available for composition in other layers.

**Target users:**
- Developers learning transparent DeFi labeling primitives
- Catalog authors who need a clean non-overclaiming health-tag example
- Anyone comparing this with loyalty or wallet-health scorecards in neighboring repos

**Success metrics for this educational repo:**
- Unit test locks the example: 2 LPs → `few-lps`; volume 100 on TVL 1000 → 1000 bps turnover
- Request builders stay pure (`executed: false`)
- Documentation never claims a live pool was read or a full health dashboard was produced from mainnet data

---

## 2. Concepts & Inspiration

### Core Concepts
- **Argument-only labels** — TVL, volume, and LP count are inputs, not discovered state.
- **Turnover in bps** — `floor((volume * 10000) / tvl)` when TVL > 0; otherwise `null`.
- **Tag set** — Deterministic tags such as `few-lps` (LP count < 3), `volume-without-tvl`, `no-turnover`, `volume-above-tvl`.
- **Unsent query builders** — Same educational pattern used across several catalog repos.
- **Neighbor separation** — Loyalty-oriented scoring lives in `wax-defi-loyalty-health-scorecard` (and similar). These tags use only the three integers you pass.

### User Pain Points Addressed
- “How do I attach simple health-style tags without pretending I scored a live protocol?”
- “Where is the pure labeling logic separated from Hyperion / pool data access?”

### Inspirations
- Educational finance primitives that stay argument-only
- Catalog discipline that prefers small correct claims over large incomplete ones

**Related Blueprints:**
- `wax-defi-loyalty-health-scorecard` (different question — loyalty)
- Other DeFi and wallet-health educational blueprints in the catalog

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Offline educational page (`src/Demo.tsx`)
- Clear presentation of the pure labeling function and the verified numeric example
- Cases that reinforce educational scenarios without implying live data

### 3.2 Key Pieces
| Piece | Role |
|-------|------|
| `src/health.ts` | Pure `labels(tvl, volume, lps)` → `{ turnoverBps, tags }` |
| `src/health.test.ts` | Locks the verified example |
| `src/api.ts` | Validated, unsent WAX/Antelope request builders |
| `src/usecases.ts` | Example compositions |
| `src/api.test.ts` / `src/usecases.test.ts` | Prove requests are built and not sent |
| `src/Demo.tsx` / `src/Cases.tsx` | Offline educational surface |

### 3.3 Accessibility & Inclusive Design
- Plain language preferred; tags and formulas shown explicitly

### 3.4 Performance & Optimization Targets
- Pure integer arithmetic for turnover and tags
- No network dependency for the educational truth of the package

---

## 4. Technical Architecture

### 4.1 Core Tech Stack
- TypeScript (strict) + Vitest
- Next.js App Router for the offline demo shell

### 4.2 Labeling Flow
```
labels(tvl, volume, lps)
  → validate integer bounds
  → tags from thresholds (e.g. lps < 3 → "few-lps")
  → if tvl === 0: turnoverBps = null (plus volume-without-tvl when volume > 0)
  → else: turnoverBps = floor(volume * 10000 / tvl)
  → additional tags for no-turnover / volume-above-tvl
  → sorted tags
```

### 4.3 Request Builder Pattern (unsent)
Identical educational pattern to sibling repos: every builder returns `{ method, url, body?, executed: false }`.

### 4.4 Folder Structure (current)
```
app/
  layout.tsx
  page.tsx
  globals.css
src/
  health.ts
  health.test.ts
  api.ts
  api.test.ts
  usecases.ts
  usecases.test.ts
  Demo.tsx
  Cases.tsx
.github/workflows/ci.yml
VERIFICATION-LOG.md
ARCHITECTURE.md
PUBLIC-READINESS.md
spec.yaml
LICENSE
```

### 4.5 Security & Privacy Notes
- No private keys, no signing, no pool reads from this package
- Request builders only construct URLs and bodies

---

## 5. Implementation Examples & Code Snippets

### The verified pure labels
```ts
import { labels } from "./src/health";

const result = labels(1000, 100, 2);
// result.turnoverBps === 1000
// result.tags includes "few-lps" (and is sorted)
```

### Edge cases (also covered by rules)
```ts
labels(0, 50, 5);   // turnoverBps null, tags include "volume-without-tvl"
labels(1000, 0, 10); // turnoverBps 0 → "no-turnover"
```

### Build an unsent request (same pattern as sibling educational repos)
```ts
import { historyActions, HISTORY_ORIGIN } from "./src/api";

const req = historyActions(HISTORY_ORIGIN, "someaccount", "eosio.token:transfer", 20);
// req.executed === false
```

---

## 6. Demo & Testing Strategy

```bash
npm install
npm test          # health, api, usecases
npm run dev       # offline educational page
```

- `src/health.test.ts` verifies the canonical labeling example
- API / usecases tests verify unsent builders
- No test claims a live protocol match or a full health dashboard from mainnet data

See [VERIFICATION-LOG.md](VERIFICATION-LOG.md).

---

## 7. Roadmap & Development Phases

**Current state (intentional):**
- Pure labeling function with strict bounds and unit test
- Unsent request builders
- Offline demo and verification log

**Explicit non-goals:**
- Reading live or historical pool / TVL / volume state inside this package
- Claiming a full DeFi protocol health dashboard
- Treating these tags as measured mainnet health scores
- Absorbing loyalty-scorecard logic (that belongs in its own repo)

---

## 8. Visual References & Expected Experience

**Key screen:**  
Offline page showing the pure labeling function, the verified numeric example (TVL 1000, volume 100, 2 LPs), and educational cases that do not execute network calls.

---

## 9. Related Blueprints & Ecosystem Fit

- Loyalty-oriented neighbor: `wax-defi-loyalty-health-scorecard`
- Shares unsent-request-builder pattern with other catalog educational repos
- Reinforces honest separation of labeling arithmetic from data access

---

## 10. License, Contributing & Credits

- MIT License
- Built to keep health-style tags honest and separable
- Pixel Journey Design System & Standards alignment
- See [VERIFICATION-LOG.md](VERIFICATION-LOG.md) and [PUBLIC-READINESS.md](PUBLIC-READINESS.md)

**This blueprint labels the three integers it is given and stops there.**

*Pixel Journey — Honest interfaces and honest documentation for public blockchain data.*

---

*Last updated: 2026-10-29 — README elevated to full educational blueprint standard while preserving the pure-function and non-pool-read claims.*
