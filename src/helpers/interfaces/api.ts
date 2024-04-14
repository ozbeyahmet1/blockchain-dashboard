export interface SupportedChain {
  id: SupportedChains;
  symbol: string;
  name: string;
  web_slug: string;
  categories: string[];
  description: { en: string; };
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

export type SupportedChains =
  | "algorand"
  | "bitcoin"
  | "ethereum"
  | "harmony"
  | "cosmos"
  | "filecoin"
  | "flow"
  | "tron"
  | "eos"
  | "cardano"
  | "everscale"
  | "solana"
  | "stellar"
  | "ripple"
  | "tezos";
