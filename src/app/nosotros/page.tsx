import React from "react";
import styles from "@/app/nosotros/page.module.css";
import Historia from "./components/Historia";
import Biografia from "./components/Biografia";

const Nosotros = () => {
  return (
    <div className={styles.body}>
      <Historia />
      <Biografia />
    </div>
  );
};

export default Nosotros;
