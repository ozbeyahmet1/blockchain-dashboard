import * as React from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TxnData } from "@/helpers/interfaces/queryTypes";
import styles from "./txnRow.module.scss";
/**
 * Renders a transaction row component.
 * @param {TxnData} props - The transaction data.
 * @returns {JSX.Element} The rendered transaction row component.
 */
export default function TxnRow({
  sender,
  to,
  gasPrice,
  block: {
    timestamp: { time },
  },
  hash,
}: TxnData) {
  return (
    <div className={styles["txnRow"]}>
      <div className={styles["txnRow_icon"]}>
        <LiaFileInvoiceSolid size={30} />
      </div>
      <div className={styles["txnRow_blockInfos"]}>
        <p className={styles["txnRow_block--mobile"]}>Block</p>
        <p className={styles["txnRow_blockNumber"]}>{hash.slice(0, 12)}...</p>
        <p className={styles["txnRow_time"]}>{time}</p>
      </div>
      <div className={styles["txnRow_transaction"]}>
        <div className={styles["txnRow_recipientWrapper"]}>
          <p>From:&nbsp;</p>
          <p className={styles["txnRow_recipient"]}>{sender.address.slice(0, 12)}...</p>
        </div>
        <div className={styles["txnRow_timeWrapper"]}>
          <p>To:&nbsp;</p>
          <p className={styles["txnRow_recipient"]}>{to.address.slice(0, 12)}...</p>
          <p className={styles["txnRow_price--mobile"]}>{gasPrice.toFixed(5)}</p>
        </div>
      </div>
      <p className={styles["txnRow_price"]}>{gasPrice.toFixed(5)}</p>
    </div>
  );
}
