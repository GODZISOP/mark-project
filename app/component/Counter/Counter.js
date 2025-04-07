'use client';
import styles from "./counter.module.css";
import { useEffect, useState, useRef } from 'react';
import { FaRunning, FaSmile, FaBriefcase } from 'react-icons/fa';

const Counter = ({ end, title, subtitle, Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 100;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.round(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className={styles.counterBox}>
      <div className={styles.counterIcon}>
        <Icon className={styles.icon} />
      </div>
      <h2 className={styles.counterNumber}>
        {count}
        {title === "Satisfaction Rate" && <span className={styles.percentSymbol}></span>}
      </h2>
      <h3 className={styles.counterTitle}>{title}</h3>
      <p className={styles.counterSubtitle}>{subtitle}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <Counter end={999} title="Athletes Trained" subtitle="and counting" Icon={FaRunning} />
        <Counter end={697} title="Satisfaction Rate" subtitle="%" Icon={FaSmile} />
        <Counter end={160} title="Professional Experience" subtitle="Years" Icon={FaBriefcase} />
      </div>
    </section>
  );
}