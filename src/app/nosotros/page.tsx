import React from "react";
import styles from "@/app/nosotros/page.module.css";
import Historia from "./components/Historia";

const Nosotros = () => {
  return (
    <div className={styles.body}>
      <Historia />
    </div>
  );
};

export default Nosotros;
