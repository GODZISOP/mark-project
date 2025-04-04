import React from 'react';
import Head from 'next/head'; // For SEO and metadata
import Image from 'next/image'; // For optimized image rendering in Next.js

const Dashboard = () => {
  return (
    <div className="dashboard-content">
    <Head>
      <title>Life Coach Client Progress Dashboard</title>
      <meta name="description" content="Track client progress and milestones in life coaching" />
    </Head>

    {/* Header Section */}
    <div className="header-section">
      <h1>Life Coach Dashboard</h1>
      <p>Track and monitor your clients' progress towards their goals.</p>
    </div>

    {/* Main Content Section with Flexbox Row */}
    <div className="main-content">
      {/* Graph Section */}

      {/* Client Details Section */}
      <div className="client-details">
        <h2>Client Progress</h2>
        <p>Here’s a detailed breakdown of your client’s progress and key coaching metrics.</p>

        {/* Progress Metrics */}
        <div className="progress-metric">
          <h3>Goal Setting</h3>
          <p><strong>Current Progress:</strong> 80%</p>
          <p><strong>Target:</strong> 90%</p>
          <p><strong>Status:</strong> In Progress</p>
        </div>

        <div className="progress-metric">
          <h3>Time Management</h3>
          <p><strong>Current Progress:</strong> 70%</p>
          <p><strong>Target:</strong> 80%</p>
          <p><strong>Status:</strong> On Track</p>
        </div>

        <div className="progress-metric">
          <h3>Mindfulness</h3>
          <p><strong>Current Progress:</strong> 60%</p>
          <p><strong>Target:</strong> 75%</p>
          <p><strong>Status:</strong> Needs Focus</p>
        </div>

        {/* Insights Section */}
        <div className="insights-container">
          <h3>Key Insights</h3>
          <p>Focus on enhancing mindfulness practices and time management skills to meet goals.</p>
          <p>Client has shown consistent progress in goal setting, but more effort is required in mindfulness.</p>
        </div>

        {/* Call to Action */}
        <div className="cta-container">
          <button className="cta-button">Schedule a Session</button>
        </div>
      </div>
      <div className="graph-container">
        <div className="graph-placeholder">
          {/* Using Next.js Image component */}
          <Image 
            src="/dashborad.gif" // Path to your dashboard image or animation
            alt="Client Progress Graph"
            width={800} // Width of the image
            height={500} // Height of the image
            className="graph-image"
          />
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Dashboard;
