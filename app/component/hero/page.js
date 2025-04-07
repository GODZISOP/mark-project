// components/HeroSection.tsx
import Image from 'next/image';
import StatsSection from '../Counter/Counter';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
        <h1 className={styles.title}>
            Transform Lives Through <span className={styles.highlight}>Purposeful Coaching</span>
          </h1>
          <p className={styles.subtitle}>
            Empower your clients to break through barriers and achieve extraordinary growth.
            Our proven framework helps you deliver life-changing results with confidence.
          </p>
          <div className={styles.buttonGroup}>
            
            <Link href="/component/heroos"  className={`${styles.button} ${styles.secondary}`}>
              Learn More →
            </Link>
          </div>
          <StatsSection></StatsSection>

        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
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