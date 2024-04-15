import { useSearchParams } from "next/navigation";
import * as React from "react";
import { SearchPageUIData } from "@/datas/searchPage.ui";
import { supportedChains } from "@/datas/supportedChains";
import Template from "@/layouts/template";
import SearchView from "@/views/search";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const searchResults = search ? supportedChains.filter((chain) => chain.id.toString().includes(search)) : null;
  const suggestedChains = supportedChains.filter((chain) => SearchPageUIData.suggestedChains.includes(chain.id));
  return (
    <Template>
      <SearchView supportedChains={searchResults} suggestedChains={suggestedChains} />
    </Template>
  );
}
