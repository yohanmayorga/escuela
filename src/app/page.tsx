import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/pages/Banner";
import Info from "@/pages/Info";

export default function Home() {
  return (
    <div className={styles.body}>
      <Banner />
      <Info />
    </div>
  );
}
