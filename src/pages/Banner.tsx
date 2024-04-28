import React from "react";
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import background from "@/../../public/assets/background.jpg";
import BannerCards from "@/components/BannerCards";
import BannerInfo from "@/components/BannerInfo";
import BannerAccordion from "@/components/BannerAccordion";
import BannerContact from "@/components/BannerContact";

const Banner = () => {
  return (
    <div className={styles.body}>
      <Image src={background} alt="background" className={styles.background} />
      <BannerCards />
      <BannerInfo />
      <BannerAccordion />
      <BannerContact />
    </div>
  );
};

export default Banner;
