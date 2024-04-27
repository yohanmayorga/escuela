"use client";
import React, { useState } from "react";
import styles from "@/styles/MobileNavbar.module.css";
import logo from "@/../../public/assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { nosotros } from "@/utils/utilsNavbar";
import { oferta } from "@/utils/utilsNavbar";
import { admision } from "@/utils/utilsNavbar";
import { comunidad } from "@/utils/utilsNavbar";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    return setShowMenu(!showMenu);
  };

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
        <div className={styles.right} onClick={() => handleClick()}>
          {showMenu ? (
            <IoClose className={styles.menu} />
          ) : (
            <IoMenu className={styles.menu} />
          )}
        </div>
      </div>

      <div className={styles.menuBody}>
        {showMenu && (
          <div className={styles.container}>
            <div className={styles.links}>
              <span className={styles.link}>
                <span className={styles.linkItem}>
                  Nosotros
                  <IoMdArrowDropdownCircle />
                </span>
                <div className={styles.subMenu}>
                  {nosotros.map((item: any) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        className={styles.link2}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </span>

              <Link href="#" className={styles.link}>
                <span className={styles.button}>
                  <MdOutlineEmail />
                  Contacto
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
