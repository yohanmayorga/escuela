import React from "react";
import styles from "@/app/nosotros/styles/Mision.module.css";
import background from "@/../../public/assets/background.jpg";
import Image from "next/image";

const Mision = () => {
  return (
    <div id="mision" className={styles.body}>
      <div className={styles.subtitleBox}>
        <span className={styles.subtitle}>Misión y visión</span>
      </div>
      <div className={styles.sides}>
        <div className={styles.side}>
          <Image src={background} alt="picture" className={styles.picture} />
        </div>
        <div className={styles.side}>
          <span className={styles.title}>Misión</span>
          <span>
            La Comunidad Educativa de la{" "}
            <strong>E.B.N “Carmen Maizo de Bello”</strong>, a partir de los
            retos que se le presentan a la sociedad Venezolana y de las
            propuestas del Ministerio del Poder Popular para la Educación, asume
            como Misión:{" "}
            <strong>
              Contribuir a la formación integral de sus estudiantes para que
              sean personas libres, autónomas, competentes y capaces de ejercer
              un liderazgo al servicio de los necesitados (pobres y excluidos)
              como expresión de su compromiso con los Valores en pro de la
              construcción de una sociedad más humana fraterna y justa.
            </strong>
          </span>
        </div>
      </div>
      <div className={styles.sides}>
        <div className={styles.side}>
          <span className={styles.title}>Visión</span>
          <span>
            Ser una{" "}
            <strong>
              Institución Educativa identificada con las características de la
              Educación Proactiva y proyectar el desarrollo de los valores
              trascendentales como el arte, el humanismo, el altruismo,
            </strong>
            instrumentado como respeto mutuo y otras expresiones vivas del amor
            filial, germinando ciudadanos felices, con suficiente capacidad
            reflexiva para modificar la lógica de la ecuación familia-escuela
            necesaria para <strong>construir la sociedad que deseamos</strong>.
          </span>
        </div>
        <div className={styles.side}>
          <Image src={background} alt="picture" className={styles.picture} />
        </div>
      </div>
    </div>
  );
};

export default Mision;
