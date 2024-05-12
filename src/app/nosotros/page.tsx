import React from "react";
import styles from "@/app/nosotros/page.module.css";
import Historia from "./components/Historia";
import Biografia from "./components/Biografia";
import Mision from "./components/Mision";
import Organigrama from "./components/Organigrama";

const Nosotros = () => {
  return (
    <div className={styles.body}>
      <Historia />
      <Biografia />
      <Mision />
      <Organigrama />
    </div>
  );
};

export default Nosotros;
