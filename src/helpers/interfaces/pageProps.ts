import { SupportedChain, SupportedChains } from "./api";
import { Coin } from "../utils/fetchNetworks";

export interface HomepageProps {
  ui: HomepageUI;
  data: Array<SupportedChain>;
  deneme: Array<Coin>;
}

export interface HomepageUI {
  header: string;
  subHeader: string;
  description: string;
  popularNetworkSearchs: Array<SupportedChains>;
  popularChainsIds: Array<SupportedChains>;
}

export interface SearchPageProps {
  suggestedChains: Array<SupportedChains>;
}
