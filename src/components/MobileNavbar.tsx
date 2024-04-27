import React from "react";
import styles from "@/styles/MobileNavbar.module.css";
import logo from "@/../../public/assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const MobileNavbar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <div className={styles.titles}>
            <span>E.B.N.</span>
            <span>Carmen Maizo de Bello</span>
          </div>
        </div>
        <div className={styles.right}>
          <IoMenu className={styles.menu} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
