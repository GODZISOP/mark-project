import Image from 'next/image';
import StatsSection from '../Counter/Counter';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
    });

    // Refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content} data-aos="fade-up" data-aos-delay="100">
          <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
            Transform Lives Through <span className={styles.highlight}>Purposeful Coaching</span>
          </h1>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="300">
            Empower your clients to break through barriers and achieve extraordinary growth.
            Our proven framework helps you deliver life-changing results with confidence.
          </p>
          <div className={styles.buttonGroup} data-aos="fade-up" data-aos-delay="400">
            <Link href="/component/heroos" className={`${styles.button} ${styles.secondary}`}>
              Learn More →
            </Link>
          </div>
          <StatsSection />
        </div>

        {/* Image */}
        <div className={styles.imageWrapper} data-aos="fade-left"  data-aos-offset="500"
     data-aos-duration="500">
          <Image
            src="/hero.png"
            alt="Modern digital interface"
            width={600}
            height={400}
            className={styles.image}
            priority
          />
          <div className={styles.imageAccent} />
        </div>
      </div>
    </section>
  );
}
