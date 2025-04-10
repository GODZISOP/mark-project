import Navbar from '@/app/navbar';
import styles from './heroos.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/Footer/page';

export default function AboutSection() {
  return (
    <div>
      <Navbar></Navbar>

    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About MarK Relic</h2>
        <p className={styles.subtitle}>Empowering you to unlock your full potential and live your best life</p>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/mark.jpg" // Replace with your actual image path
              alt="Mar Relic - Professional Life Coach"
              width={400}
              height={500}
              className={styles.image}
              />
          </div>
          
          <div className={styles.textContainer}>
            <p className={styles.text}>
              Hi, I'm <span className={styles.highlight}>Mar Relic</span>, a certified life coach with over 10 years of experience helping individuals transform their lives. My journey began when I discovered my passion for helping others overcome obstacles and achieve their dreams.
            </p>
            
            <p className={styles.text}>
              I specialize in <span className={styles.highlight}>personal development, career transitions, relationship coaching, and mindfulness practices</span>. My approach combines evidence-based techniques with intuitive guidance to create lasting change.
            </p>
            
            <p className={styles.text}>
              What sets me apart is my unique blend of professional training and personal experience. I've walked the path of transformation myself and understand the challenges you may be facing. My clients describe me as <span className={styles.highlight}>compassionate, insightful, and results-driven</span>.
            </p>
            
            <Link href="/component/contact"  className={styles.ctaButton}>Start Your Journey Today</Link>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
              </div>
  );
}