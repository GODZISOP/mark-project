// components/Dashboard.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Dashboard.module.css'; // CSS Module import

const Dashboard = () => {
  return (
    <div className={styles.dashboardContent}>
      <Head>
        <title>Life Coach Client Progress Dashboard</title>
        <meta name="description" content="Track client progress and milestones in life coaching" />
      </Head>

      {/* Header Section */}
      <div className={styles.headerSection}>
      <h1>Life Coach Performance Dashboard</h1>
      <p>Track your coaching effectiveness, client outcomes, and professional growth metrics.</p>      </div>

      {/* Main Content Section */}
      <div className={styles.mainContent}>
        {/* Client Details Section */}
        <div className={styles.clientDetails}>
        <h2>My Coaching Progress</h2>
        <p>Key indicators measuring your impact and professional development as a coach.</p>

          {/* Progress Metrics */}
          <div className={styles.progressMetric}>
          <h3>Client Success Rate</h3>
      <p><strong>Current:</strong> 82% of clients meeting goals</p>
      <p><strong>Target:</strong> 90% success rate</p>
      <p><strong>Status:</strong> Exceeding Expectations</p>
          </div>

          <div className={styles.progressMetric}>
          <h3>Session Effectiveness</h3>
      <p><strong>Current:</strong> 4.7/5 average rating</p>
      <p><strong>Target:</strong> 4.8/5 rating</p>
      <p><strong>Status:</strong> On Track</p>
          </div>

          <div className={styles.progressMetric}>
          <h3>Certification Progress</h3>
      <p><strong>Current:</strong> 3/5 modules completed</p>
      <p><strong>Target:</strong> Full certification</p>
      <p><strong>Status:</strong> completed</p>
          </div>

          {/* Insights Section */}
          <div className={styles.insightsContainer}>
          <h3>Development Opportunities</h3>
      <p>Your client success rate is strong - consider mentoring newer coaches to share your techniques.</p>
      <p>Focus on completing your advanced certification to increase your coaching credentials.</p>
          </div>

          {/* Call to Action */}
          <div className={styles.ctaContainer}>
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
        <div className={styles.graphContainer}>
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