import * as React from "react";
import styles from "./card.module.scss";
import { AnimationProps, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export interface CardProps {
  index: number;
  url: string;
  name: string;
  imageUrl: string;
}

export default function Card({ index, url, imageUrl, name }: CardProps) {
  const cardMotionProps: AnimationProps = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: index * 0.3 + 0.1, delay: 0.2 },
  };

  return (
    <motion.a href={url} className={styles["card"]} {...cardMotionProps}>
      <Image className={styles["card_image"]} src={imageUrl} width={80} height={80} alt="" />
      <p className={styles["card_title"]}>{name}</p>
    </motion.a>
  );
}
