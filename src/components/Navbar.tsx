import React from "react";
import styles from "@/styles/Navbar.module.css";
import logo from "@/../../public/assets/logo.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { nosotros } from "@/utils/utilsNavbar";
import { oferta } from "@/utils/utilsNavbar";
import { admision } from "@/utils/utilsNavbar";
import { comunidad } from "@/utils/utilsNavbar";

const Navbar = () => {
  return (
    <div className={styles.body}>
      <Link href="/" className={styles.link}>
        <div className={styles.left}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <div className={styles.titles}>
            <span>E.B.N.</span>
            <span>Carmen Maizo de Bello</span>
          </div>
        </div>
      </Link>
      <div className={styles.right}>
        <div className={styles.phone}>
          <FaPhone className={styles.icon} />
          <span>(0212)-1234567</span>
        </div>

        <div className={styles.links}>
          <span className={styles.link}>
            <Link href="/nosotros" className={styles.link}>
              <span className={styles.linkItem}>
                Nosotros
                <IoMdArrowDropdownCircle />
              </span>
            </Link>
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

          <span className={styles.link}>
            <span className={styles.linkItem}>
              Oferta académica
              <IoMdArrowDropdownCircle />
            </span>
            <div className={styles.subMenu}>
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
            <span className={styles.linkItem}>
              Admisión
              <IoMdArrowDropdownCircle />
            </span>
            <div className={styles.subMenu}>
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
            <span className={styles.linkItem}>
              Comunidad
              <IoMdArrowDropdownCircle />
            </span>
            <div className={styles.subMenu}>
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

          <Link href="#" className={styles.link}>
            <span className={styles.button}>
              <MdOutlineEmail />
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
