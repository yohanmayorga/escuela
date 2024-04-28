"use client";
import React, { useState } from "react";
import styles from "@/styles/BannerAccordion.module.css";
import { accordion } from "@/utils/utilsAccordion";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";
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
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={Background} alt="picture" className={styles.picture} />
        </div>
        <div className={styles.center}>
          <h1 className={styles.quote}>
            <MdQuestionAnswer />
            Preguntas frecuentes.
          </h1>
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
      <div className={styles.customShape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BannerAccordion;
