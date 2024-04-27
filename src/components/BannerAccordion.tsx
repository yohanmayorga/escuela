"use client";
import React, { useState } from "react";
import styles from "@/styles/BannerAccordion.module.css";
import { accordion } from "@/utils/utilsAccordion";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Background from "@/../../public/assets/background.jpg";
import Image from "next/image";

const BannerAccordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id: any) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };
  return (
    <div className={styles.body}>
      <h1 className={styles.quote}>Preguntas frecuentes.</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={Background} alt="picture" className={styles.picture} />
        </div>
        <div className={styles.center}>
          <div className={styles.accordion}>
            {accordion.map((item: any, i) => {
              return (
                <div key={item.id} className={styles.item}>
                  <div className={styles.question} onClick={() => toggle(i)}>
                    {item.question}
                    {selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                  <div
                    className={
                      selected === i ? styles.answerShow : styles.answerHide
                    }
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <Image src={Background} alt="picture" className={styles.picture} />
        </div>
      </div>
    </div>
  );
};

export default BannerAccordion;
