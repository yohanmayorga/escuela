import React from "react";
import styles from "@/styles/Footer.module.css";
import logo from "@/../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <div className={styles.title}>
          <span>Escuela Básica Nacional</span>
          <span>Carmen Maizo de Bello</span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTitle}>
          <span>Enlaces</span> <HiCursorClick />
        </div>
        <ul className={styles.list}>
          <Link href="#" className={styles.link}>
            <span>Nosotros</span>
          </Link>
          <Link href="#" className={styles.link}>
            <span>Oferta</span>
          </Link>
          <Link href="#" className={styles.link}>
            <span>Admisión</span>
          </Link>
          <Link href="#" className={styles.link}>
            <span>Comunidad</span>
          </Link>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.middleTitle}>
          <span>Contacto</span> <MdOutlineEmail />
        </div>
        <ul className={styles.list}>
          <span>Teléfono: (0212)-1234567</span>

          <span>Correo: correo@gmail.com</span>

          <span>Horario: 08:00 am - 04:00 pm</span>

          <span>El Valle - Caracas</span>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
