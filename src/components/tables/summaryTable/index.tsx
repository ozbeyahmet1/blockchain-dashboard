import { AnimationProps, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import * as React from "react";
import Loader from "@/components/ui/loader";
import styles from "./summaryTable.module.scss";

export interface SummaryTableProps {
  header: string;
  elements: Array<React.ReactNode>;
  loading: boolean;
  type: "block" | "transaction";
}

export default function SummaryTable({ header, elements, loading, type }: SummaryTableProps) {
  const pathname = usePathname();
  const router = useRouter();
  const motionDivProps: AnimationProps = {
    initial: { y: 1600, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };
  const handleClick = () => {
    void router.push(`/${pathname}/${type}s`);
  };
  return (
    <motion.div className={styles["summaryTable"]} {...motionDivProps} onClick={handleClick}>
      <header className={styles["summaryTable_header"]}>{header}</header>
      <div className={styles["summaryTable_elements"]}>{loading ? <Loader /> : elements}</div>
      <div className={styles["summaryTable--bottom"]}>VIEW ALL {type.toUpperCase()}S</div>
    </motion.div>
  );
}
