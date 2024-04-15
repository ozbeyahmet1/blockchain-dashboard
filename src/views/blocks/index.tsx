import { useQuery } from "@apollo/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import * as React from "react";
import BlocksTable from "@/components/tables/blockTable";
import Loader from "@/components/ui/loader";
import { supportedChains } from "@/datas/supportedChains";
import { BlockQuery, TxnQuery } from "@/helpers/interfaces/queryTypes";
import { GET_BLOCKS_QUERY, GET_TRANSACTIONS } from "@/helpers/utils/queries";
import styles from "./blocksPage.module.scss";

export default function BlocksPageView() {
  const router = useRouter();

  // useRouter ile URL parametrelerini al
  const { query } = router;
  const { network } = query;
  const searchResult = supportedChains.find((chain) => chain.web_slug.toString().includes(network as string));
  const {
    loading,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: blockData,
    error: blockError,
  } = useQuery(GET_BLOCKS_QUERY, {
    variables: { network: searchResult?.id, limit: 20 },
  });

  const {
    error,
    loading: txnLoading,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: transactionData,
  } = useQuery(GET_TRANSACTIONS, { variables: { limit: 1 } });

  const blocks = (blockData as BlockQuery)?.blocks.blocks;
  console.log(loading, blockError, blockData);
  const transactions = (transactionData as TxnQuery)?.transactions.transactions;
  return (
    <div className={styles["blocksPage"]}>
      <div className={styles["blocksPage_container"] + " container"}>
        {loading ? <Loader /> : <BlocksTable blockDatas={blocks} />}
      </div>
    </div>
  );
}
