import React from "react";
import styles from "@/app/nosotros/styles/Historia.module.css";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

const Historia = () => {
  return (
    <div className={styles.body}>
      <div className={styles.titleBox}>
        <span className={styles.title}>Nosotros</span>
      </div>

      <div className={styles.historyBox}>
        <div className={styles.subtitleBox}>
          <span className={styles.subtitle}>Nuestra historia</span>
        </div>

        <div className={styles.textsColumns}>
          <div className={styles.textsColumsBox}>
            <MdOutlineHistoryEdu className={styles.icon} />
            <span className={styles.textColumn}>
              Atendiendo a una necesidad de la comunidad en el año{" "}
              <strong>1960</strong> fue creada la{" "}
              <strong>Escuela Concentrada N° 59</strong>, ubicada en la planta
              baja del edificio Tequendama, en la Avenida Intercomunal de{" "}
              <strong>El Valle</strong>, impartiendo instrucción a los niños de
              la zona desde preescolar hasta 6º Grado de Educación Primaria.
            </span>
          </div>
          <div className={styles.textsColumsBox}>
            <IoHome className={styles.icon} />
            <span className={styles.textColumn}>
              Para la década de los setenta, la Institución se trastada a una
              casa ubicada en la calle real del sector, donde funcionaba la
              <strong> Escuela de Artes y Oficios de El Valle</strong>, cuya
              instalación se quedó pequeña ante la creciente demanda de ingresos
              de niños de la zona al sistema educativo.
            </span>
          </div>
          <div className={styles.textsColumsBox}>
            <FaPeopleRoof className={styles.icon} />
            <span className={styles.textColumn}>
              Para esta misma década los docentes, con el acuerdo de la
              Comunidad Educativa, deciden en asamblea general de Padres y
              Representantes asignarle el nombre al Plantel con el de la
              educadora <strong>Carmen Maizo de Bello</strong>, insigne y
              abnegada educadora quien había trabajado en varias instituciones
              educativas de Caracas, incluyendo la{" "}
              <strong>Escuela Elias Toro</strong>, ubicada en la Parroquia El
              Valle.
            </span>
          </div>
          <div className={styles.textsColumsBox}>
            <FaBook className={styles.icon} />
            <span className={styles.textColumn}>
              Luego de la Promulgación de la{" "}
              <strong>Ley Orgánica de Educación</strong> en el año 1980, y a
              partir de la implantación del segundo nivel del Sistema Educativo
              como Escuela Básica en 1982, recibió una nueva categoría, con la
              denominación de{" "}
              <strong>Escuela Básica Nacional Carmen Maizo de Bello</strong>,
              atendiendo alumnos de la I y II etapa, tal como lo hace en la
              actualidad.
            </span>
          </div>
        </div>

        <div className={styles.mainTextBox}>
          <div className={styles.mainTextBoxSide}>
            <FaPeopleRoof className={styles.icon} />
            <span className={styles.textColumn}>
              A finales de <strong>1987</strong>, FEDE construía un local
              educativo cercano a la casa donde cumplía sus funciones esta
              Institución. Los Docentes y su Comunidad Educativa, preocupados
              por las limitaciones de espacio y por las inundaciones que sufrían
              cuando llovía que no le permitía brindar comodidad y una educación
              integral a su población estudiantil, ni aumentar la matrícula, y
              ante la omisión e indiferencia de las autoridades para atender las
              solicitudes y buscarle solución al problema por parte del
              Ministerio de Educación, decidieron en Enero de 1988 hacer una
              toma de este espacio físico, que había sido destinado para un
              liceo.
            </span>
          </div>
          <div className={styles.mainTextBoxSide}>
            <PiStudentBold className={styles.icon} />
            <span className={styles.textColumn}>
              Gracias a esta iniciativa lograron que esta edificación fuera
              cedida a la Escuela donde funciona actualmente, permitiendo
              <strong>
                brindar educación de calidad a una mayor cantidad de estudiantes
              </strong>
              , contribuyendo también a la formación del nuevo docente, por
              cuanto en este Plantel realizan sus prácticas profesionales,
              estudiantes de la{" "}
              <strong>
                Escuela de Educación UCV, Universidad Bolivariana de Venezuela
                (UBV) y de la Universidad Pedagógica Experimental Libertador
                (Pedagógico de Caracas)
              </strong>
              .
            </span>
          </div>
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

export default Historia;
