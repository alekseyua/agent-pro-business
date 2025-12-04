import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/ContactSection.module.scss";
import { icons } from "../../assets";

const ContactRow = ({
  children,
  image,
  alt,
}: {
  children: React.ReactNode;
  image: string;
  alt: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.row} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.column}>{children}</div>
      <div className={styles.imageColumn}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <ContactRow image={icons.alla} alt="Contact 1">
        <p className={styles.title}>Акционерное общество «АГЕНТПРО»</p>
        <br />
        <p className={styles.subText12}>Юридический адрес:</p>
        <p className={styles.subText15}>
          123112, г.Москва, наб. Пресненская, д.12, помещ. 18/66
        </p>
        <p className={styles.subText15}>ИНН/КПП 9703213601/770301001</p>
        <br />
        <p className={styles.subText15}>ОГРНИП. 1257700258617</p>
        <p className={styles.subText12}>ДИРЕКТОР</p>
        <p className={styles.subTitle}>Скоробогатова Алла Владимировна</p>
        <a className={styles.phone} href="mailto:agentprob1@gmail.com">
          E-mail: agentprob1@gmail.com
        </a>
        <a className={styles.phone} href="tel:+79271284990">
          тел. +7 927 128 4990
        </a>
      </ContactRow>

      <ContactRow image={icons.nat} alt="Contact 2">
        <p className={styles.titleBig}>業務/法團所用名稱 法律地位</p>
        <p className={styles.title}>AGENT PRO BUSINESS LIMITED</p>
        <p className={styles.subText12}>BODY CORPORATION</p>
        <p className={styles.subText14}>
          RM 5003, 5/F YAU LEE CENTRE, 45 HOI YUEN RD KWUN TONG HONG KONG
        </p>
        <br />
        <p>登記瞭體碼/TIN 77910193-000-03-25-4</p>
        <br />
        <p className={styles.subText12}>ОГРНИП / Certificate № 27010100</p>
        <p className={styles.subTitle}>TIUMCHENKOVA NATALIA</p>
        <a className={styles.phone} href="mailto:agentprobusiness@gmail.com">
          E-mail: agentprobusiness@gmail.com
          </a>
       <a className={styles.phone} href="tel:+79271284990">
          тел. +86 17620072230
        </a>
      </ContactRow>
    </section>
  );
};

export default ContactSection;
