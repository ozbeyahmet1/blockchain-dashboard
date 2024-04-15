export interface SupportedChain {
  id: SupportedChains;
  symbol: string;
  name: string;
  categories: string[];
  description: { en: string };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  web_slug: string;
}

export type SupportedChains =
  | "ethereum"
  | "avalanche"
  | "bsc"
  | "matic"
  | "celo_mainnet"
  | "fantom"
  | "moonbeam"
  | "velas"
  | "cronos"
  | "klaytn";
