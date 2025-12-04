import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/ServicesSection.module.scss";
import { api } from "../../api";

interface IListItem {
  id: number;
  image: string;
  title: string;
}

const ServicesSection: React.FC = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [listItems, setListItems] = useState<IListItem[] | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visibleItems];
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== -1) {
            updated[index] = true;
          }
        });
        setVisibleItems(updated);
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  useEffect(() => {
    if (listItems && listItems.length > 0) {
      setVisibleItems(new Array(listItems.length).fill(false));
    } else {
      setVisibleItems([]); // Очистка visibleItems, если listItems пуст
    }
  }, [listItems]);

  useEffect(() => {
    const getFetch = async function () {
      try {
        const getApi = api();
        const res: IListItem[] = await getApi.get("/info/offer/get_offers/");
        setListItems(res);
      } catch (error) {
        console.error(error);
      }
    };
    getFetch();
  }, []);
  if (!listItems) return null;

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>УСЛУГИ и ПРЕДЛОЖЕНИЯ</h2>

      <ul className={styles.list}>
        {listItems.map((service: IListItem, index) => (
          <li
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`${styles.item} ${
              visibleItems[index] ? styles.visible : styles.hidden
            }`}
          >
            <img src={service.image} alt="" className={styles.icon} />
            <span className={styles.text}>{service.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
