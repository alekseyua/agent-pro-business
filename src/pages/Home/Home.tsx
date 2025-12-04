import React from 'react';
import styles from "./styles/Home.module.scss";
import VideoSection from '../../components/VideoSection/VideoSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import NewsSection from '../../components/NewsSection/NewsSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import OverlaySection from '../../components/OverlaySection/OverlaySection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <VideoSection />
      <ServicesSection />
      <NewsSection />
      <FeedbackSection />
      <OverlaySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;