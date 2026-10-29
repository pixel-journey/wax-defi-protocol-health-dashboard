# Architecture

**Trust label:** `educational-reference`  
**Repo:** `wax-defi-protocol-health-dashboard`

---

## Purpose

Integer division and threshold tags from three arguments. A label is not a rating and not a suggestion to deposit. No pool is read.

---

## System overview

```
┌──────────────────────────────────────────────┐
│              Offline demo UI                  │
│              Demo.tsx · Cases.tsx             │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              Pure labeling                    │
│   health.ts → labels(tvl, volume, lps)        │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│         Unsent request builders               │
│         api.ts · usecases.ts                  │
└──────────────────────────────────────────────┘
```

---

## Layers

1. **Label core** — `labels` with bounds, turnover bps, sorted tags
2. **Builders** — Educational unsent request shapes
3. **Demo** — Same pure functions as tests

---

## Honesty boundaries

| Boundary | Enforcement |
|----------|-------------|
| No live pool | Argument-only |
| Not a loyalty scorecard | Explicit neighbor pointer |
| Not investment advice | Docs + architecture note |

---

## Deep docs

- [docs/LABELING-RULES.md](docs/LABELING-RULES.md)
- [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md)
- [VERIFICATION-LOG.md](VERIFICATION-LOG.md)
- [README.md](README.md)

---

*Pixel Journey — Architecture that labels only what it is given.*
