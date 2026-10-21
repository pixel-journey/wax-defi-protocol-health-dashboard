import { CHAIN_ORIGIN, HISTORY_ORIGIN, currencyBalance, historyActions } from "./api";
import { labels } from "./health";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const row = labels(1000, 100, 2);

export const USE_CASES: UseCase[] = [
  {
    title: "A token balance is not TVL",
    detail: `Turnover is ${row.turnoverBps} bps. The balance request is not sent.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "Transfer history is not volume",
    detail: "No swap is built.",
    request: historyActions(HISTORY_ORIGIN, "alice", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (row.turnoverBps !== 1000 || !row.tags.includes("few-lps")) throw new Error("health");
}
