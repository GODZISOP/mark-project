'use client';

import { useEffect, useState, useRef } from 'react';
import { FaRunning, FaSmile, FaBriefcase } from 'react-icons/fa'; // Import icons from React Icons

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
    <div ref={ref} className="counter-box">
      <div className="counter-icon">
        <Icon size={40} color="#00b0ff" /> {/* Display the icon */}
      </div>
      <h2 className="counter-number">{count}</h2>
      <h3 className="counter-title">{title}</h3>
      <p className="counter-subtitle">{subtitle}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <div className="stats-container">
      <Counter end={999} title="Athletes Trained"  Icon={FaRunning} />
      <Counter end={697} title="Satisfaction Rate"  Icon={FaSmile} />
      <Counter end={160} title="Professional Experience" subtitle=" "Icon={FaBriefcase} />
    </div>
  );
}