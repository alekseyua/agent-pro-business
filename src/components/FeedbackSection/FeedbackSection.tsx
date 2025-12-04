import React, { useEffect, useState } from "react";
import styles from "./styles/FeedbackSection.module.scss";
import { icons } from "../../assets";
import { api } from "../../api";

interface Feedback {
  id: number;
  image: string;
  logo: string;
  title: string;
  text: string;
}

const feedbacks: Feedback[] = [
  {
    id: 1,
    image: icons.face,
    logo: icons.templateProfileReview,
    title: "Отличный сервис!",
    text:
      "Мы очень довольны качеством работы и профессионализмом команды.",
  },
  {
    id: 2,
    image: icons.face,
    logo: icons.templateProfileReview,
    title: "Рекомендуем!",
    text: "Сотрудничаем не первый год. Надёжные партнёры.",
  },
  {
    id: 3,
    image: icons.face,
    logo: icons.templateProfileReview,
    title: "Спасибо!",
    text: "Быстро, качественно и без лишних хлопот.",
  },
  {
    id: 4,
    image: icons.face,
    logo: icons.templateProfileReview,
    title: "Супер поддержка",
    text: "Реагируют быстро и эффективно решают задачи.",
  },
  {
    id: 5,
    image: icons.face,
    logo: icons.templateProfileReview,
    title: "Надежно!",
    text: "Рад, что выбрал именно эту команду.",
  },
];

const FeedbackSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [listItems, setListItems] = useState<Feedback[] | null>(null);

useEffect(() => {
    const getFetch = async function () {
      try {
        const getApi = api();
        const res: Feedback[] = await getApi.get("/info/comment/get_comments/");
        const updateRes = res.map( (el:Feedback) => ({...el, logo: icons.templateProfileReview,}))
        setListItems(updateRes);
      } catch (error) {
        console.error(error);
      }
    };
    getFetch();
  }, []);
  if (!listItems) return null;


  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev: number) =>
      prev === 0 ? feedbacks.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev: number) =>
      prev + visibleCount >= feedbacks.length ? 0 : prev + 1
    );
  };

  const visibleFeedbacks = feedbacks.slice(
    startIndex,
    startIndex + visibleCount
  );

  // Для цикличности при конце массива
  while (visibleFeedbacks.length < visibleCount) {
    visibleFeedbacks.push(
      ...feedbacks.slice(0, visibleCount - visibleFeedbacks.length)
    );
  }
  

  return (
    <section className={styles.feedbackSection} id="pay">
      <h2 className={styles.title}>О НАС</h2>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          <img src={icons.arrowLeftBlue} alt="Назад" />
        </button>

        <div className={styles.cardsRow}>
          {listItems.map((item: Feedback) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.avatarLogoWrapper}>
                <img src={item.image} alt="Аватар" className={styles.avatar} />
                <img
                  src={item.logo}
                  alt="Логотип компании"
                  className={styles.logo}
                />
              </div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDescription}>{item.text}</div>
            </div>
          ))}
        </div>

        <button className={styles.arrowRight} onClick={handleNext}>
          <img src={icons.arrowLeftBlue} alt="Вперёд" />
        </button>
      </div>
    </section>
  );
};

export default FeedbackSection;
