import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as React from "react";
import BlocksTable from "@/components/tables/blockTable";
import TransactionTable from "@/components/tables/txnTable";
import Loader from "@/components/ui/loader";
import { supportedChains } from "@/datas/supportedChains";
import { BlockQuery, TxnQuery } from "@/helpers/interfaces/queryTypes";
import { GET_BLOCKS_QUERY, GET_TRANSACTIONS } from "@/helpers/utils/queries";
import styles from "./transactionsPage.module.scss";

export default function TransactionsPageView() {
  const router = useRouter();

  // useRouter ile URL parametrelerini al
  const { query } = router;
  const { network } = query;
  const searchResult = supportedChains.find((chain) => chain.web_slug.toString().includes(network as string));
  const {
    loading,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: txnData,
    error,
  } = useQuery(GET_TRANSACTIONS, {
    variables: { network: searchResult?.id, limit: 20 },
  });

  const transactions = (txnData as TxnQuery)?.transactions.transactions;

  return (
    <div className={styles["transactionsPage"]}>
      <div className={styles["transactionsPage_container"] + " container"}>
        {loading ? <Loader /> : <TransactionTable txnDatas={transactions} />}
      </div>
    </div>
  );
}
