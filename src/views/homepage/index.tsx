import { AnimationProps, motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";
import Card from "@/components/card";
import SearchBar from "@/components/searchBar";
import { HomepageProps } from "@/helpers/interfaces/pageProps";
import styles from "./homepage.module.scss";
export default function HomepageView({
  ui: { description, header, subHeader, popularNetworkSearchs },
  data: { popularChains, searchedChains },
}: HomepageProps) {
  const headerMotionProps: AnimationProps = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
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
          {popularChains.map((popularNetwork, i) => {
            return <Card key={i} index={i} data={popularNetwork} />;
          })}
        </div>
      </div>
      <SearchBar chains={searchedChains} />
    </div>
  );
}
