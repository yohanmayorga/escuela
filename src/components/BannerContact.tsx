import styles from "@/styles/BannerContact.module.css";
import Phone from "@/../../public/assets/Phone.png";
import Image from "next/image";

const BannerContact = () => {
  return (
    <div className={styles.body}>
      <Image src={Phone} alt="phone" className={styles.phone} />
      <div></div>
    </div>
  );
};

export default BannerContact;
