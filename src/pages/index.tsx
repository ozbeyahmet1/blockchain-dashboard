import { supportedChains } from "@/datas/supportedChains";
import Template from "@/layouts/template";
import HomepageView from "@/views/homepage";
import { HomepageUIData } from "../datas/homepage.ui";

export default function Home() {
  const popularChains = supportedChains.filter((chain) => HomepageUIData.popularChainsIds.includes(chain.id));
  const searchedChains = supportedChains.filter((chain) => HomepageUIData.popularNetworkSearchs.includes(chain.id));
  return (
    <Template>
      <HomepageView ui={HomepageUIData} data={{ popularChains, searchedChains }} />
    </Template>
  );
}
