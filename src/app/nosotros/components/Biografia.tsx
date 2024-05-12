import React from "react";
import styles from "@/app/nosotros/styles/Biografia.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import School1 from "@/../../public/assets/School1.png";
import School2 from "@/../../public/assets/School2.png";
import School3 from "@/../../public/assets/School3.png";
import Piano from "@/../../public/assets/Piano.png";
import Avion from "@/../../public/assets/avion.png";
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
            <strong>Escuela de Artes y Oficios </strong>
            dirigida por Antolina González, la{" "}
            <strong>Academia Nacional de Bellas Artes</strong> y realizó varios
            cursos de manualidades entre ellos: Bordados en blanco y sedas.
          </span>
        </div>

        <div className={styles.scrollBox}>
          <Image src={Piano} alt="School" className={styles.scrollImage} />
          <span>
            Obtuvo certificados de{" "}
            <strong>Teoria musical, solfeo y piano</strong>. <br />
            <br />
            Cursó preparatorio en el Liceo de Niñas. Recibió el Título de
            Kindergarterina Normal. Prestó sus servicios en las escuelas{" "}
            <strong>Elías Toro</strong> (en El Valle),{" "}
            <strong>
              Simón Rodriguez, O Higginins, Luís Razetti, Teresa Eduardo,
              República de Brasil, República de Haiti
            </strong>{" "}
            y <strong>Superior de Niños </strong>
            como docente y secretaria. Durante seis meses suplió oficialmente la
            dirección de la Escuela Nacional <strong>Guzmán Blanco</strong>.
          </span>
        </div>

        <div className={styles.scrollBox}>
          <Image src={Avion} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Viajó en misión especial</strong> del gobierno visitando
            países de <strong>América del Sur</strong>.El Cónsul de Venezuela en
            Estados Unidos la hizo acompañar de un intérprete. Visitó e hizo
            prácticas en diez institutos. <br /> <br />
            En sus viajes también fue a varios <strong>países de Europa</strong>
            .
          </span>
        </div>

        <div className={styles.scrollBox}>
          <Image src={School2} alt="School" className={styles.scrollImage} />
          <span>
            Se casó con <strong>Jorge Bello Bugh</strong>, con quien logró traer
            a la <strong>Compañía de Santa Teresa de Jesús</strong> (dedicado
            únicamente a la enseñanza), para fundar colegios en Venezuela.{" "}
            <br /> <br />
            Centenares de personas y amigos los acompañaron en su feliz
            iniciativa.
          </span>
        </div>

        <div className={styles.scrollBox}>
          <Image src={School1} alt="School" className={styles.scrollImage} />
          <span>
            <strong>Carmen Maizo de Bello falleció en Caracas</strong>, en el
            sector de El Paraíso, Urbanización Las Fuentes, calle N° 2, Quinta
            La Malvarosa <strong>el día 1 de mayo de 1972</strong>.<br /> <br />
            Cristianamente esta sepultada en 5° cuerpo del{" "}
            <strong>Cementerio General de Sur</strong>.
          </span>
        </div>

        <div className={styles.scrollBox}>
          <Image src={School3} alt="School" className={styles.scrollImage} />
          <span>
            Considerando el sensible fallecimiento de la educadora{" "}
            <strong>Carmen Maizo de Bello</strong>, además de constituir una
            irreparable pérdida para el Magisterio Nacional, enluta el hogar de
            su afligido viudo Jorge y en el mayor dolor a su hermana, reverenda
            madre Modesta Maizo Delgado, directora del{" "}
            <strong>Colegio Teresiano de Nuestra Señora de Coromoto </strong>y
            primer vocal de la junta directiva de esta asociación.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
