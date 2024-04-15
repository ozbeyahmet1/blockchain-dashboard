import { useQuery } from "@apollo/client";
import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SummaryTable from "@/components/tables/summaryTable";
import BlockRow from "@/components/tables/tableRows/blockRow";
import TxnRow from "@/components/tables/tableRows/txnRow";
import Tag from "@/components/ui/tag";
import { supportedChains } from "@/datas/supportedChains";
import { SupportedChain } from "@/helpers/interfaces/api";
import { BlockQuery, TxnQuery } from "@/helpers/interfaces/queryTypes";
import { GET_BLOCKS_QUERY, GET_TRANSACTIONS } from "@/helpers/utils/queries";
import styles from "./network.module.scss";

/**
 * Props for the NetworkPageView component.
 */
interface NetworkPageViewProps {
  chainData: SupportedChain;
}

/**
 * NetworkPageView component displays the network page view.
 * @param {NetworkPageViewProps} props - The component props.
 * @returns {JSX.Element} The rendered NetworkPageView component.
 */
export default function NetworkPageView({ chainData }: NetworkPageViewProps): JSX.Element {
  const pathname = usePathname();
  const searchResult = supportedChains.find((chain) =>
    chain.web_slug.toString().includes(pathname?.replace("/", ""))
  );
  const motionDivProps: AnimationProps = {
    initial: { y: -300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  const {
    loading,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: blockData,
  } = useQuery(GET_BLOCKS_QUERY, {
    variables: { network: searchResult?.id },
  });

  const {
    error,
    loading: txnLoading,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: transactionData,
  } = useQuery(GET_TRANSACTIONS, {});

  const [collapsed, setCollapsed] = useState(true);
  const blocks = (blockData as BlockQuery)?.blocks;
  const transactions = (transactionData as TxnQuery)?.transactions.transactions;
  console.log(transactions, error);
  const description = { __html: chainData.description.en.slice(0, collapsed ? 250 : chainData.description.en.length) };

  return (
    <div className={styles["network"]}>
      <div className={styles["network_container"] + " container"}>
        <motion.div className={styles["network--top"]} {...motionDivProps}>
          <Image src={chainData?.image?.large} width={150} height={150} alt="" />
          <div>
            <h2>{chainData.name}</h2>
            <div>
              <div dangerouslySetInnerHTML={description} />
              {collapsed ? (
                <p className={styles["network_readMore"]} onClick={() => setCollapsed(false)}>
                  Read More
                </p>
              ) : (
                <p className={styles["network_readMore"]} onClick={() => setCollapsed(true)}>
                  Read Less
                </p>
              )}
            </div>
            <div className={styles["network_grid"]}>
              {chainData.categories.slice(0, 11).map((category, i) => {
                return <Tag text={category} key={i} as="div" />;
              })}
            </div>
          </div>
        </motion.div>
        <div className={styles["network--bottom"]}>
          <>
            <SummaryTable
              header="Latest Blocks"
              elements={
                blocks?.blocks.map((block, i) => {
                  return <BlockRow {...block} key={i} />;
                }) ?? []
              }
              loading={loading}
            />
            <SummaryTable
              header="Latest Transactions"
              elements={
                transactions?.map((transaction, i) => {
                  return <TxnRow {...transaction} key={i} />;
                }) ?? []
              }
              loading={txnLoading}
            />
          </>
        </div>
      </div>
    </div>
  );
}
