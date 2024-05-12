import React from "react";
import styles from "@/app/nosotros/styles/Biografia.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import School1 from "@/../../public/assets/School1.png";
import Image from "next/image";

const Biografia = () => {
  return (
    <div className={styles.body}>
      <div className={styles.subtitleBox}>
        <span className={styles.subtitle}>Carmen Maizo de Bello</span>
      </div>
      <div className={styles.image}></div>

      <div className={styles.arrowsBox}>
        <span>
          <FaArrowCircleLeft />
        </span>
        <span>Biografía</span>
        <span>
          <FaArrowCircleRight />
        </span>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello</strong> nació en Caracas el{" "}
            <strong>29 de abril de 1904</strong>. Sus padres fueron Acisclo
            Maizo y Amelia Delgado. Cursó estudios en la Escuela Primaria
            dirigida por Isabel Rodriguez de Blanco, en la Escuela Primaria
            dirigida por Guadalupe García Siberio así como en el Colegio
            Nacional de Niñas dirigido por Josefina Daviat. Estudió en la
            Escuela Normal, luego en la{" "}
            <strong>Escuela de Artes y Oficios</strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong>y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
