import React from "react";
import styles from "@/styles/Info.module.css";
import InfoCards from "@/components/InfoCards";
import Image from "next/image";
import logo from "@/../../public/assets/logo.png";

const Info = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.quote}>
        “Cita que identifica el objetivo y la misión de la Escuela Básica
        Nacional Carmen Maizo de Bello”.
      </h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <span className={styles.des}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aliquid
            tempore placeat suscipit alias blanditiis id sed necessitatibus
            molestiae asperiores temporibus distinctio quae odio nihil, officia
            porro modi! Iusto, quos?
          </span>
        </div>
        <div className={styles.right}>
          <InfoCards />
        </div>
      </div>
    </div>
  );
};

export default Info;
