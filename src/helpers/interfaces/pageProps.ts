import { SupportedChain, SupportedChains } from "./api";

export interface HomepageProps {
  ui: HomepageUI;
  data: Array<SupportedChain>;
}

export interface HomepageUI {
  header: string;
  subHeader: string;
  description: string;
  popularNetworkSearchs: Array<SupportedChains>;
  popularChainsIds: Array<SupportedChains>;
}
