import React from "react";
import styles from "./styles/Footer.module.scss";
import { icons } from "../../assets";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.leftTop}>
          © 2025 АГЕНТПРО / AGENT PRO BUSINESS LIMITED
        </div>
        <div className={styles.leftBottom}>業務/法團所用名稱 法律地位</div>
      </div>

      <div className={styles.right}>
        <div className={styles.contEmail}>
          <p>
            <a className={styles.mail} href="mailto:agentprob1@gmail.com">
              <span>E-mail: agentprob1@gmail.com</span>
            </a>
          </p>
          <span className={styles.separator}>/</span>
          <p>
            <a
              className={styles.mail}
              href="mailto:agentprobusiness@gmail.com"
            >
              E-mail: agentprobusiness@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.contSocial}>
          <div className={styles.contactGroup}>
            <div className={styles.phone}>
              <a href="tel:+79271284990">+7 (927) 128-49-90</a>
            </div>
          </div>

          <div className={styles.telegram}>
            <a href="https://t.me/agentproblimited">
              <img src={icons.telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
