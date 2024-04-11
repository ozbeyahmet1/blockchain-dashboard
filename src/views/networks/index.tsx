import SummaryTable from "@/components/tables/summaryTable";
import styles from "./network.module.scss";
import { blockDatas } from "@/datas/blockData.sample";
import BlockRow from "@/components/tables/tableRows/blockRow";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
export default function NetworkPageView() {
  const motionDivProps: AnimationProps = {
    initial: { y: -300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };
  return (
    <div className={styles["network"]}>
      <div className={styles["network_container"] + " container"}>
        <motion.div className={styles["network--top"]} {...motionDivProps}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg" width="150" />
          <div className={styles["network_grid"]}>
            <div>
              <h4>Price</h4>
              <p>$3,498.95 @ 0.050124 BTC (+0.58%)</p>
            </div>
            <div>
              <h4>Price</h4>
              <p>$3,498.95 @ 0.050124 BTC (+0.58%)</p>
            </div>
            <div>
              <h4>Price</h4>
              <p>$3,498.95 @ 0.050124 BTC (+0.58%)</p>
            </div>
            <div>
              <h4>Price</h4>
              <p>$3,498.95 @ 0.050124 BTC (+0.58%)</p>
            </div>
          </div>
        </motion.div>
        <div className={styles["network--bottom"]}>
          <SummaryTable
            header="Latest Blocks"
            elements={blockDatas.map((blockData, i) => {
              return <BlockRow {...blockData} key={i} />;
            })}
          />
          <SummaryTable
            header="Latest Blocks"
            elements={blockDatas.map((blockData, i) => {
              return <BlockRow {...blockData} key={i} />;
            })}
          />
        </div>
      </div>
    </div>
  );
}
