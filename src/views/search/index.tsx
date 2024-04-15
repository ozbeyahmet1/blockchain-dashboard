import * as React from "react";
import Card from "@/components/card";
import { SupportedChain } from "@/helpers/interfaces/api";
import styles from "./search.module.scss";

/**
 * Props for the SearchView component.
 */
export interface SearchViewProps {
  supportedChains: Array<SupportedChain> | null;
  suggestedChains: Array<SupportedChain>;
}

/**
 * SearchView component displays the search results based on the supported chains and suggested chains.
 * @param supportedChains - An array of supported chains.
 * @param suggestedChains - An array of suggested chains.
 * @returns The rendered SearchView component.
 */
export default function SearchView({ supportedChains, suggestedChains }: SearchViewProps) {
  /**
   * Renders the component when no results are found.
   * @returns The rendered NoResults component.
   */
  function NoResults() {
    return (
      <>
        <h1 className={styles["search_noResultsText"]}>
          No results found. You might want to consider the following options instead:
        </h1>
        <div className={styles["search_grid"]}>
          {suggestedChains?.map((suggestedChain, i) => {
            return <Card index={i * 0.2} key={suggestedChain.id} data={suggestedChain} />;
          })}
        </div>
      </>
    );
  }

  function Results() {
    return (
      <div className={styles["search_grid"]}>
        {supportedChains?.map((supportedChain, i) => {
          return <Card index={i * 0.2} key={supportedChain.id} data={supportedChain} />;
        })}
      </div>
    );
  }

  return (
    <div className={styles["search"]}>
      <div className={styles["search_container"] + " container"}>
        {supportedChains && supportedChains.length > 0 ? <Results /> : <NoResults />}
      </div>
    </div>
  );
}
