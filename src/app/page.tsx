import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/pages/Banner";

export default function Home() {
  return (
    <div className={styles.body}>
      <Banner />
    </div>
  );
}
