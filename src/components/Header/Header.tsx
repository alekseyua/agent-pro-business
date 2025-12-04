// src/components/Header/Header.tsx
import React from "react";
import styles from "./Header.module.scss";
import { useScrolled } from "../../hooks/useScrolled";
import { icons } from "../../assets";
import { useActiveSection } from "../../hooks/useActiveSection";
const Header: React.FC = () => {
  const scrolled = useScrolled(120); // меняется после 30px прокрутки
  const activeId = useActiveSection(["services", "pay", "contacts"]);
  //${scrolled ? styles.scrolled : ""}
  return (
    <header className={`${styles.header} `}>
      {/* Левая часть */}
      <div className={styles.left}>
        <img src={icons.logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Центр */}
      <div className={styles.center}>
        <div className={styles.title}>ао агентпро</div>
        <nav className={styles.nav}>
          <a
            href="#services"
            className={activeId === "services" ? styles.active : ""}
          >
            УСЛУГИ и ПРЕДЛОЖЕНИЯ
          </a>
          <a href="#pay" className={activeId === "pay" ? styles.active : ""}>
            О НАС
          </a>
          <a
            href="#contacts"
            className={activeId === "contacts" ? styles.active : ""}
          >
            КОНТАКТЫ
          </a>
        </nav>
      </div>

      {/* Правая часть */}
      <div className={styles.right}>
        <div className={styles.phone}>
          <a href="tel:+79271284990">+7 (927) 128-49-90</a>
        </div>
        <div className={styles.icons}>
        <a href="https://t.me/agentproblimited" className={`${styles.iconsTelegram} ${scrolled ? styles.iconsTelegramMob : ''}`}>
            <img src={icons.telegram} alt="telegram" />
          </a>
          <a href="mailto:agentprobusiness@gmail.com">
            <img src={icons.mail} alt="mail" style={{ transform: 'scale(1.3)' }} />
          </a>
          {/* <img src={icons.profile} alt="profile" /> */}
        </div>
        <div className={styles.subDesc}>
          Поможем с вашей задачей. Напишите нам 
        </div>
      </div>
    </header>
  );
};

export default Header;
