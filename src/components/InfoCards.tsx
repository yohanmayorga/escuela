import React from "react";
import styles from "@/styles/InfoCards.module.css";
import { cards } from "@/utils/utilsInfo";

const InfoCards = () => {
  return (
    <div className={styles.body}>
      {cards.map((item: any) => {
        return (
          <div key={item.id} className={styles.cardBody}>
            <div className={styles.number}>{item.number}</div>
            <div className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.des}>{item.des}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCards;
