import React from 'react';
import styles from './VideoSection.module.scss';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className={styles.videoSection}>
      {/* Вариант с YouTube */}
      {/* Вариант с YouTube */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src="/movies/slider-converted.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
