import { AnimationProps, motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";
import { HomepageProps } from "@/helpers/interfaces/pageProps";
import styles from "./homepage.module.scss";
import Card from "@/components/ui/logo/card";
import { blockchainDatas } from "@/datas/blockchainData";
export default function HomepageView({ ui: { description, header, subHeader } }: HomepageProps) {
  const headerMotionProps: AnimationProps = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 1 },
  };
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage_container"] + " container"}>
        <motion.h1 className={styles["homepage_header"]} {...headerMotionProps}>
          {header}
        </motion.h1>
        <h3 className={styles["homepage_subHeader"]}>
          <BsLightningFill color="yellow" /> {subHeader}
        </h3>
        <h5 className={styles["homepage_description"]}>{description}</h5>
        <div className={styles["grid-container"]}>
          {blockchainDatas.map((blockchainData, i) => {
            return (
              <Card
                key={i}
                index={i}
                imageUrl={blockchainData.logo}
                name={blockchainData.name}
                url={"/" + blockchainData.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
