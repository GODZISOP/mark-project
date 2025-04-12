"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

import styles from './Dashboard.module.css'; // CSS Module import

const Dashboard = () => {
  // Initialize AOS (Animation On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the duration of the animation
      once: true,      // Ensures animation occurs only once
    });

    // Refresh AOS animations when scrolling
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.dashboardContent}>
      <Head>
        <title>Life Coach Client Progress Dashboard</title>
        <meta name="description" content="Track client progress and milestones in life coaching" />
      </Head>

      {/* Header Section */}
      <div className={styles.headerSection} data-aos="fade-up" data-aos-delay="100">
        <h1>Life Coach Performance Dashboard</h1>
        <p>Track your coaching effectiveness, client outcomes, and professional growth metrics.</p>
      </div>

      {/* Main Content Section */}
      <div className={styles.mainContent}>
        {/* Client Details Section */}
        <div className={styles.clientDetails} data-aos="fade-left" data-aos-delay="200">
          <h2>My Coaching Progress</h2>
          <p>Key indicators measuring your impact and professional development as a coach.</p>

          {/* Progress Metrics */}
          <div className={styles.progressMetric} data-aos="zoom-in" data-aos-delay="300">
            <h3>Client Success Rate</h3>
            <p><strong>Current:</strong> 82% of clients meeting goals</p>
            <p><strong>Target:</strong> 90% success rate</p>
            <p><strong>Status:</strong> Exceeding Expectations</p>
          </div>

          <div className={styles.progressMetric} data-aos="zoom-in" data-aos-delay="400">
            <h3>Session Effectiveness</h3>
            <p><strong>Current:</strong> 4.7/5 average rating</p>
            <p><strong>Target:</strong> 4.8/5 rating</p>
            <p><strong>Status:</strong> On Track</p>
          </div>

          <div className={styles.progressMetric} data-aos="zoom-in" data-aos-delay="500">
            <h3>Certification Progress</h3>
            <p><strong>Current:</strong> 3/5 modules completed</p>
            <p><strong>Target:</strong> Full certification</p>
            <p><strong>Status:</strong> Completed</p>
          </div>

          {/* Insights Section */}
          <div className={styles.insightsContainer} data-aos="fade-up" data-aos-delay="600">
            <h3>Development Opportunities</h3>
            <p>Your client success rate is strong - consider mentoring newer coaches to share your techniques.</p>
            <p>Focus on completing your advanced certification to increase your coaching credentials.</p>
          </div>

          {/* Call to Action */}
          <div className={styles.ctaContainer} data-aos="fade-up" data-aos-delay="700">
            <a
              href="https://calendly.com/markoreljin5dva/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Schedule a Session
            </a>
          </div>
        </div>

        {/* Graph Section */}
        <div className={styles.graphContainer} data-aos="fade-right" data-aos-delay="800">
          <div className={styles.graphPlaceholder}>
            <Image
              src="/dashborad.gif"
              alt="Client Progress Graph"
              width={800}
              height={500}
              className={styles.graphImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
