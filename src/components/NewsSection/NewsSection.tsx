import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/NewsSection.module.scss";
import { icons } from "../../assets";
import { api } from "../../api";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  text: string;
};

const NewsSection: React.FC = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSlides, setVisibleSlides] = useState<boolean[]>([]);
  const [listItems, setListItems] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visibleSlides];
        entries.forEach((entry) => {
          const index = slideRefs.current.findIndex(
            (el) => el === entry.target
          );
          if (entry.isIntersecting && index !== -1) {
            updated[index] = true;
          }
        });
        setVisibleSlides(updated);
      },
      { threshold: 0.2 }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleSlides]);

  useEffect(() => {
    if (listItems && listItems.length>0){
      setVisibleSlides(new Array(listItems.length).fill(false));
    }else{
      setVisibleSlides([]);
    }
  }, [listItems]);

  useEffect(() => {
    const getFetch = async function () {
      try {
        const getApi = api();
        const res: NewsItem[] = await getApi.get("/info/news/get_news/");

        setListItems(res);
      } catch (error) {
        console.error(error);
      }
    };
    getFetch();
  }, []);
  if (!listItems) return null;

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <img src={icons.news} alt="icon" className={styles.icon} />
        <h2 className={styles.title}>НОВОСТИ и СООБЩЕНИЯ</h2>
      </div>

      <div className={styles.slider}>
        {listItems.map((item: NewsItem, index: number) => (
          <a href="https://t.me/agentproblimited" key={index} className={styles.newsLink}>
            <div
              key={item.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={`${styles.slide} ${
                visibleSlides[index] ? styles.visible : styles.hidden
              }`}
              >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.newsDesc}>
                {item.text}
              </div>
              <div className={styles.caption}>
                <p>{item.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
