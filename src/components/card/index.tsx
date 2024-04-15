import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { SupportedChain } from "@/helpers/interfaces/api";
import styles from "./card.module.scss";

/**
 * Props for the Card component.
 */
export interface CardProps {
  index: number;
  data: SupportedChain;
}

/**
 * A card component that displays information about a supported blockchain.
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} - The rendered Card component.
 */
export default function Card({ index, data: { name, image, web_slug } }: CardProps): JSX.Element {
  const cardMotionProps: AnimationProps = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: index * 0.3 + 0.1, delay: 0.2 },
  };

  return (
    <motion.a href={"/" + web_slug.toLowerCase()} className={styles["card"]} {...cardMotionProps}>
      <Image className={styles["card_image"]} src={image.large} width={80} height={80} alt="" />
      <p className={styles["card_title"]}>{name}</p>
    </motion.a>
  );
}
