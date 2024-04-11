import Template from "@/layouts/template";
import HomepageView from "@/views/homepage";
import { HomepageUIData } from "../datas/homepage.ui";
import { HomepageProps } from "@/helpers/interfaces/pageProps";

export default function Home() {
  return (
    <Template>
      <HomepageView ui={HomepageUIData} />
    </Template>
  );
}
