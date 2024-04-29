import React from "react";
import styles from "@/app/nosotros/styles/Historia.module.css";
import Escuela1 from "@/../../public/assets/Escuela.jpeg";
import Image from "next/image";

const Historia = () => {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <Image src={Escuela1} alt="escuela" className={styles.picture} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Nuestra historia</h1>
        <div className={styles.texts}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
            corrupti voluptas officiis voluptatibus nam sint modi velit sunt,
            assumenda eius. Quae nisi repellat odio architecto sit, minus ad
            possimus?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
            corrupti voluptas officiis voluptatibus nam sint modi velit sunt,
            assumenda eius. Quae nisi repellat odio architecto sit, minus ad
            possimus?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
            corrupti voluptas officiis voluptatibus nam sint modi velit sunt,
            assumenda eius. Quae nisi repellat odio architecto sit, minus ad
            possimus?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Historia;
