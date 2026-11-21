# Security — protocol label function

## Closed in tests

| Issue | Behavior |
| --- | --- |
| TVL 0 | turnover is `null` (no divide by zero) |
| Volume 0 and TVL 0 | no `volume-without-tvl` tag |
| LP count 2 | `few-lps` |
| LP count 3 | that tag is absent |
| volume ≥ TVL with TVL > 0 | `volume-above-tvl` |
| volume 0 with TVL > 0 | `no-turnover` |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Data source | Arguments are not a pool read |
| Grade | Tags are **not** a risk score and **not** investment advice |
| Freshness | No block time, no oracle |
| Auth | Nothing here changes an account |
| Wash volume | This lab cannot see wash trades |

## Attack angles

1. Shipping the tag list as "protocol is healthy."  
2. Hiding `few-lps` by passing LP count 3 when the chain has two.  
3. Dividing volume by TVL in floating point and calling it this turnover.  
4. Treating `volume-above-tvl` as proof of real trading rather than possible wash.  
5. Using tags as auto-ban or auto-invest signals.

## Honesty limits

No network. No wasm. Labels only — never grades.

[docs.wax.io](https://docs.wax.io/) · [retention suite](https://github.com/pixel-journey/wax-defi-retention-metric-suite) (different integer) · [Alcor range backtester](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) · [wash triad](https://github.com/pixel-journey/wax-wash-trading-deduplicator).
