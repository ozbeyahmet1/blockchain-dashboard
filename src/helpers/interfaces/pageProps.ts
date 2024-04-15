import { SupportedChain, SupportedChains } from "./api";

export interface HomepageProps {
  ui: HomepageUI;
  data: {
    popularChains: Array<SupportedChain>;
    searchedChains: Array<SupportedChain>;
  };
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
