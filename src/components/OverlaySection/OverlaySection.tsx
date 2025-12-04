import React from "react";
import styles from "./styles/OverlaySection.module.scss";
import { icons } from "../../assets";

const OverlaySection: React.FC = () => {
  return (
    <section className={styles.section} id="contacts">
      <img
        src={icons.header}
        alt="Background"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}>
        <img src={icons.logoBlack} alt="Логотип" className={styles.logo} />
        <h2 className={styles.text}>Контакты</h2>
      </div>
    </section>
  );
};

export default OverlaySection;
