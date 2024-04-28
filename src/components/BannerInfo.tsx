import React from "react";
import styles from "@/styles/BannerInfo.module.css";
import InfoCards from "@/components/InfoCards";
import Image from "next/image";
import logo from "@/../../public/assets/logo.png";

const BannerInfo = () => {
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

      <div className={styles.customShape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BannerInfo;
