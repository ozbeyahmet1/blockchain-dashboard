import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { SearchPageUIData } from "@/datas/searchPage.ui";
import { supportedChains } from "@/datas/supportedChains";
import Template from "@/layouts/template";
import NetworkPageView from "@/views/networks";
import styles from "./network.module.scss";
export default function Network() {
  const suggestedChains = supportedChains.filter((chain) => SearchPageUIData.suggestedChains.includes(chain.id));
  function NoResult() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowContent(true);
      }, 500); // Adjust the delay time as needed

      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    return (
      <div className={styles["networkPage"] + " container"}>
        {showContent && (
          <>
            <h1 className={styles["networkPage_noResultsText"]}>
              No results found. You might want to consider the following options instead:
            </h1>
            <div className={styles["networkPage_grid"]}>
              {suggestedChains?.map((suggestedChain, i) => {
                return <Card index={i * 0.2} key={suggestedChain.id} data={suggestedChain} />;
              })}
            </div>
          </>
        )}
      </div>
    );
  }
  const pathname = usePathname();

  const supportedChainData = supportedChains.find((chain) => chain.web_slug === pathname?.replace("/", ""));
  return <Template>{supportedChainData ? <NetworkPageView chainData={supportedChainData} /> : <NoResult />}</Template>;
}
