# Labels from three integers

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

TVL 1000, volume 100, and 2 LPs is few-lps and 1000 bps of turnover. Volume with zero TVL is named, not scored. No pool is read.

This repo was empty. It now contains one rule and two unsent queries.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/health.ts` | The pure rules |
| `src/health.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/api.ts` | The same unsent WAX query builders as the other educational repos |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Where the neighboring idea lives

This is not `wax-defi-loyalty-health-scorecard`. Loyalty, if that repo ships it, is a different question. These tags use only the three integers you pass.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
