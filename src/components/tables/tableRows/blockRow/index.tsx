import * as React from "react";
import { HiOutlineCube } from "react-icons/hi2";
import { BlockData } from "@/helpers/interfaces/queryTypes";
import styles from "./blockRow.module.scss";

/**
 * Renders a single row for a block in the Ethereum blockchain.
 *
 * @param height - The height of the block.
 * @param timestamp - The timestamp of the block.
 * @param timestamp.time - The time of the block.
 * @param transactionCount - The number of transactions in the block.
 * @param miner - The miner of the block.
 * @param reward - The reward for mining the block.
 * @returns The rendered block row component.
 */
export default function BlockRow({ height, timestamp: { time }, transactionCount, miner, reward }: BlockData) {
  return (
    <div className={styles["blockRow"]}>
      <div className={styles["blockRow_icon"]}>
        <HiOutlineCube size={30} />
      </div>
      <div className={styles["blockRow_blockInfos"]}>
        <p className={styles["blockRow_block--mobile"]}>Block</p>
        <p className={styles["blockRow_blockNumber"]}>{height}</p>
        <p className={styles["blockRow_time"]}>{time}</p>
      </div>
      <div className={styles["blockRow_transaction"]}>
        <div className={styles["blockRow_recipientWrapper"]}>
          <p>Fee Recipient</p>
          <p className={styles["blockRow_recipient"]}>{miner.address.slice(0, 10)}...</p>
        </div>
        <div className={styles["blockRow_timeWrapper"]}>
          <p>{transactionCount} txns</p>
          <p>in 15 secs</p>
          <p className={styles["blockRow_price--mobile"]}>{reward.toFixed(5)}</p>
        </div>
      </div>
      <p className={styles["blockRow_price"]}>{reward.toFixed(5)}</p>
    </div>
  );
}
