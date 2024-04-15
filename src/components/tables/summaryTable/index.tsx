import { AnimationProps, motion } from "framer-motion";
import * as React from "react";
import Loader from "@/components/ui/loader";
import styles from "./summaryTable.module.scss";
export interface SummaryTableProps {
  header: string;
  elements: Array<React.ReactNode>;
  loading: boolean;
}

export default function SummaryTable({ header, elements, loading }: SummaryTableProps) {
  const motionDivProps: AnimationProps = {
    initial: { y: 1600, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };
  return (
    <motion.div className={styles["summaryTable"]} {...motionDivProps}>
      <header className={styles["summaryTable_header"]}>{header}</header>
      <div className={styles["summaryTable_elements"]}>{loading ? <Loader /> : elements}</div>
      <div className={styles["summaryTable--bottom"]}>VIEW ALL BLOCKS</div>
    </motion.div>
  );
}
