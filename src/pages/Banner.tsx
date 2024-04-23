import React from "react";
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import background from "@/../../public/assets/background.jpg";
import BannerCards from "@/components/BannerCards";

const Banner = () => {
  return (
    <div className={styles.body}>
      <Image src={background} alt="background" className={styles.background} />
      <BannerCards />
    </div>
  );
};

export default Banner;
