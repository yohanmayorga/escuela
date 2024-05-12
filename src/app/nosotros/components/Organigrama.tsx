import React from "react";
import styles from "@/app/nosotros/styles/Organigrama.module.css";
import { organigrama } from "@/utils/utilsOrganigrama";

const Organigrama = () => {
  return (
    <div id="organigrama" className={styles.body}>
      <div className={styles.subtitleBox}>
        <span className={styles.subtitle}>Organigrama</span>
      </div>
      {organigrama.map((item: any) => {
        return (
          <div key={item.id} className={styles.cardBody}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.number}>{item.number}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Organigrama;
