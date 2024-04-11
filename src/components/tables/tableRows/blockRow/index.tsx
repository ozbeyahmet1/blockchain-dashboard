import * as React from "react";
import { HiOutlineCube } from "react-icons/hi2";
import styles from "./blockRow.module.scss";
export interface BlockRowProps {
  blockNumber: number;
  time: string;
  recipient: string;
  transactionCount: number;
  blockTime: number;
  price: number;
}

export default function BlockRow({ blockNumber, time, recipient, transactionCount, blockTime, price }: BlockRowProps) {
  return (
    <div className={styles["blockRow"]}>
      <div className={styles["blockRow_icon"]}>
        <HiOutlineCube size={30} />
      </div>
      <div className={styles["blockRow_blockInfos"]}>
        <p className={styles["blockRow_block--mobile"]}>Block</p>
        <p className={styles["blockRow_blockNumber"]}>{blockNumber}</p>
        <p className={styles["blockRow_time"]}>{time}</p>
      </div>
      <div className={styles["blockRow_transaction"]}>
        <div className={styles["blockRow_recipientWrapper"]}>
          <p>Fee Recipient</p>
          <p className={styles["blockRow_recipient"]}>{recipient}</p>
        </div>
        <div className={styles["blockRow_timeWrapper"]}>
          <p>{transactionCount} txns</p>
          <p>in {blockTime} secs</p>
          <p className={styles["blockRow_price--mobile"]}>{price}</p>
        </div>
      </div>
      <p className={styles["blockRow_price"]}>{price}</p>
    </div>
  );
}
