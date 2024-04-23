import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/BannerCards.module.css";
import { cards } from "@/utils/utilsBanner";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const BannerCards = () => {
  return (
    <div className={styles.body}>
      {cards.map((item: any) => {
        return (
          <div key={item.id} className={styles.cardBody}>
            <Image
              src={item.picture}
              alt="picture"
              className={styles.picture}
            />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.des}>{item.des}</div>
            <Link href={item.link} className={styles.link}>
              <div className={styles.button}>
                <FaBookReader className={styles.icon} />
                SABER MÁS
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BannerCards;
