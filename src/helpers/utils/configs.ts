import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient } from "@tanstack/react-query";
import { arbitrum, base, mainnet, optimism, polygon, polygonMumbai, sepolia } from "wagmi/chains";

/**
 * Apollo Client instance for making GraphQL requests.
 */
export const client = new ApolloClient({
  uri: "https://graphql.bitquery.io",
  headers: {
    "X-API-KEY": `${process.env.NEXT_PUBLIC_BITQUERY_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

/**
 * Default configuration for the application.
 */
export const config = getDefaultConfig({
  appName: "Bloki",
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, polygonMumbai],
  ssr: true,
});

/**
 * Query Client instance for managing data fetching and caching.
 */
export const queryClient = new QueryClient();
