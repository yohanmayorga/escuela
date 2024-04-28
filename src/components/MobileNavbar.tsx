"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/MobileNavbar.module.css";
import logo from "@/../../public/assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import { nosotros } from "@/utils/utilsNavbar";
import { oferta } from "@/utils/utilsNavbar";
import { admision } from "@/utils/utilsNavbar";
import { comunidad } from "@/utils/utilsNavbar";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [id, setId] = useState("");

  const handleClick = () => {
    if (showMenu) {
      setShowMenu(!showMenu);
      setId("");
    } else {
      setShowMenu(!showMenu);
    }
  };

  const handleSubmenu = (name: any) => {
    setId(name);
    if (showSubmenu) {
      if (name === id) {
        setShowSubmenu(false);
      } else {
        return showSubmenu;
      }
    } else {
      setShowSubmenu(!showSubmenu);
    }
  };

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [callback]);
    return ref;
  };
  const ref = useOutsideClick(() => {
    setShowMenu(false);
    setId("");
  });

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
          <div ref={ref} className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>
                <Image
                  src={logo}
                  alt="logo"
                  className={styles.logoProfile}
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span>E.B.N.</span>
              <span>Carmen Maizo de Bello</span>
            </div>
            <div className={styles.links}>
              <span className={styles.link}>
                <span
                  className={styles.linkItem}
                  onClick={() => handleSubmenu("nosotros")}
                >
                  Nosotros
                  {showSubmenu && id === "nosotros" ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </span>
                <div
                  className={
                    showSubmenu && id === "nosotros"
                      ? styles.subMenu
                      : styles.hide
                  }
                >
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

              <span className={styles.link}>
                <span
                  className={styles.linkItem}
                  onClick={() => handleSubmenu("oferta")}
                >
                  Oferta académica
                  {showSubmenu && id === "oferta" ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </span>
                <div
                  className={
                    showSubmenu && id === "oferta"
                      ? styles.subMenu
                      : styles.hide
                  }
                >
                  {oferta.map((item: any) => {
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

              <span className={styles.link}>
                <span
                  className={styles.linkItem}
                  onClick={() => handleSubmenu("admision")}
                >
                  Admisión
                  {showSubmenu && id === "admision" ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </span>
                <div
                  className={
                    showSubmenu && id === "admision"
                      ? styles.subMenu
                      : styles.hide
                  }
                >
                  {admision.map((item: any) => {
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

              <span className={styles.link}>
                <span
                  className={styles.linkItem}
                  onClick={() => handleSubmenu("comunidad")}
                >
                  Comunidad
                  {showSubmenu && id === "comunidad" ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </span>
                <div
                  className={
                    showSubmenu && id === "comunidad"
                      ? styles.subMenu
                      : styles.hide
                  }
                >
                  {comunidad.map((item: any) => {
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
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottomItem}>
                <FaPhone /> (0212)-1234567
              </div>
              <div className={styles.bottomItem}>
                <MdOutlineEmail /> correo@gmail.com
              </div>
              <div className={styles.bottomItem}>
                <IoMdTime /> 08:00 am - 04:00 pm
              </div>
              <div className={styles.bottomItem}>
                <FaMapMarkedAlt /> El Valle - Caracas
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
