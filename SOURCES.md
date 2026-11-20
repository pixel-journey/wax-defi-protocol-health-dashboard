# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [docs/LABELING-RULES.md](docs/LABELING-RULES.md) | Tag definitions |
| [retention suite](https://github.com/pixel-journey/wax-defi-retention-metric-suite) | A different metric (return counts) |

## Product facts locked by tests

```text
turnover = floor(volume * 10000 / tvl)    # null when tvl is 0
```

| Tag | Cutoff |
| --- | --- |
| `few-lps` | LP count < 3 |
| `volume-without-tvl` | TVL 0 and volume > 0 |
| `no-turnover` | TVL > 0 and volume 0 |
| `volume-above-tvl` | turnover ≥ 10000 |

Equal volume and TVL is enough for `volume-above-tvl`. Two LPs is few; three is not. Tags are **labels**, not a health grade and not a pool read.
