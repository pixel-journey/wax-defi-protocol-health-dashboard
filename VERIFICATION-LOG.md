# Verification log

**Trust label:** educational-reference  
**Updated:** 2026-10-29 (Deep educational pass)

| Claim | Evidence | State |
| --- | --- | --- |
| 2 LPs is few-lps and volume 100 on TVL 1000 is 1000 bps | `src/health.test.ts` | verified (unit) |
| Zero TVL does not divide; volume-without-tvl | `src/health.test.ts` | verified (unit) |
| Requests are built and not sent | `src/usecases.test.ts` and `src/api.test.ts` | verified (unit) |
| Demo renders the same functions | `src/Demo.tsx` | partial (inspection) |
| Labeling rules documented | `docs/LABELING-RULES.md` | verified (docs) |
| Worked examples documented | `docs/WORKED-EXAMPLES.md` | verified (docs) |
| Architecture documented | `ARCHITECTURE.md` | verified (docs) |
| A live endpoint matches this repo | none | untested |
| Full protocol health from mainnet | **not claimed** | permanent non-goal |
| Loyalty scorecard | **not claimed** | see neighbor repo |

```bash
npm test
```

## Deep-pass notes (2026-10-29)

- Added `docs/LABELING-RULES.md` and `docs/WORKED-EXAMPLES.md`
- Expanded `ARCHITECTURE.md`
- Pure labeling semantics unchanged
