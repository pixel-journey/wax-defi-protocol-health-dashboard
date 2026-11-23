# AI handoff — protocol health labels

## Non-negotiables

1. `turnover = floor(volume * 10000 / tvl)`. Null when TVL is 0.
2. `few-lps` when LP count < 3. Two is few; three is not.
3. `volume-without-tvl` when TVL is 0 and volume > 0.
4. `no-turnover` when TVL > 0 and volume is 0.
5. `volume-above-tvl` when turnover ≥ 10000. Equal volume and TVL qualifies.
6. Tags are **labels**, not a health grade and not a pool read.
7. Retention bps (return counts) is a different lab.

## Prompt seeds

- "TVL equals volume — which tag?"
- "Two LPs versus three — few-lps?"
- "Refuse turning tags into a live pool grade."

## Do not

- Read Alcor or a pool inside unit tests.
- Call these tags a protocol health score.
