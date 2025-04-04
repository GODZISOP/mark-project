"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Card from "./card";
import Pages from "./component/pages";
import ArticleCard from "./component/pages";
import { useState } from "react";
import StatsSection from "./Counter";
import HorizontalScroll from "./horzontal";
import Dashboard from "./dashborad";
export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer visibility


  
  const pages = [
    { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "Dive into the updated edition of 'The Woods' series, where we guide you step-by-step through the exciting features of Next.js. Whether you're a beginner or looking to level up your skills, this resource will help you master the fundamentals of Next.js development with hands-on examples and practical tips", image: "/wood.png", color: "#f0f0f0" },
    { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
    { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "Exciting things are happening at the Frankfurt Book Fair this October! Join us as we showcase our expertise in React optimization. Whether you're a developer or a fan of cutting-edge technology, our presentation will provide key insights into making your React applications more efficient and scalable", image: "/woods.png", color: "#f0f0f0" },
    { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "Dive into the updated edition of 'The Woods' series, where we guide you step-by-step through the exciting features of Next.js. Whether you're a beginner or looking to level up your skills, this resource will help you master the fundamentals of Next.js development with hands-on examples and practical tips", image: "/wood.png", color: "#f0f0f0" },
    { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
    { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "Exciting things are happening at the Frankfurt Book Fair this October! Join us as we showcase our expertise in React optimization. Whether you're a developer or a fan of cutting-edge technology, our presentation will provide key insights into making your React applications more efficient and scalable", image: "/woods.png", color: "#f0f0f0" },
   
  ]


  const cards = [
    {
      category: "Full Body",
      title: "ENERGY",
      description: "Energy is everything and we work on yours. We work on your energy levels and reach higher state of your awareness.",
      image: "/nature.jpg", // Replace with actual image path
      color: "darkseagreen"
    },
    {
      category: "Legs",
      title: "Legs, Bums And Tums",
      description: "This is a part that supports each aspect of your life and goes to the core of things. We work on how spiritual  and supports you in every aspect of your life.",
      image: "/ocean.jpg", // Replace with actual image path
      color: "lightblue" // Gold"
    },
    {
      category: "Yoga",
      title: "Active Yoga",
      description: "Equally important in you personal and professional growth. Creativity is a matter of many different elements coming and working togethe.",
      image: "/create.jpg", // Replace with actual image path
      color: "gainsboro"
    },
    {
      category: "Yoga",
      title: "Active Yoga",
      description: "Equally important in you personal and professional growth. Creativity is a matter of many different elements coming and working togethe.",
      image: "/relation.png", // Replace with actual image path
      color: "khaki"
    }
    
  ];
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };



  return (
    <div className="wrapper">
     <header className="navbar"> <div className="navbar-container">
       <h1 className="navbar-title">Build Your Life with Mark</h1>
        {/* Hamburger Menu Icon (Visible on mobile screens) */} 
        <div className="hamburger-icon" onClick={toggleDrawer}> 
          <div className="bar"></div> <div className="bar">
            
          </div>
           <div className="bar"></div> 
           </div> {/* Navbar Links for Desktop (default) */}
            <nav className={`navbar-links ${drawerOpen ? "active" : ""}`}>
               <a href="#about" className="navbar-link"> About </a> <a href="#services" className="navbar-link"> Services </a>
                <a href="#contact" className="navbar-link"> Contact </a> </nav>
                 </div> {/* Drawer Menu for Mobile (Initially hidden) */} <div className={`drawer ${drawerOpen ? "open" : ""}`}> 
                  <nav className="navbar-links"> <a href="#about" className="navbar-link"> About </a> <a href="#services" className="navbar-link"> Services </a>
                   <a href="#contact" className="navbar-link"> Contact </a>
                    </nav> {/* Cancel Button to close the drawer */} <button className="cancel-btn" onClick={closeDrawer}> Close </button> </div> </header>
      <div className="container">
      {/* Header Section */}
      <div className="header">
      {/* Typing Effect for "MARK RELIC" */}
      <h1 className="typing-effect">
        <Typewriter
          words={["My name is Mark, and I am a life coach."]}
          loop={true} // Infinite loop
          cursor
          cursorStyle="_"
          typeSpeed={150} // Speed of typing
          deleteSpeed={50} // Speed of deleting
          delaySpeed={1000} // Pause before restart
        />
      </h1>

      {/* Image Section */}
      <div className="image-container">
        <Image
          src="/mark.jpg"  // Update with the correct path
          alt="Relaxation exercise"
          width={500}
          height={300}
          className="main-image"
          />
          </div>
      <div className="booking-section1">

          <h2>Healing Minds Together</h2>
          <p>Your Path To Mental Wellness</p>
          <p>
          Mark Relic is a writer, a novelist, English teacher and life coach. He is business, energy, creativity, relationship strategist. His talent is diverse, first starting in hospitality industry, venturing into teaching combined with coaching. Mark helps people achieving their goals and that he has been doing for over ten years. He lives his calling by serving and helping people reaching their goals and dreams.
          </p>
          <Image
          src="/marksss.png"  // Update with the correct path
          alt="Relaxation exercise"
          width={150}
          height={30}
          />
          
          </div>
      </div>

      {/* Booking Section */}
      <div>

      <div className="booking-section">
        <h3>Book Schedule</h3>
        <p>Our training programs have received immense appreciation.</p>
        <button className="button">Book Appointment</button>
        <Image
          src="/contact.gif"  // Update with the correct path
          alt="Relaxation exercise"
          width={150}
          height={100}
          />
      </div>

      <div className="booking-section">
        <h3>Book Schedule</h3>
        <p>Our training programs have received immense appreciation.</p>
        <button className="button">Book Appointment</button>
        <Image id="hellomoto"
          src="/calls.gif"  // Update with the correct path
          alt="Relaxation exercise"
          width={150}
          height={150}
          />
      </div>
      </div>
    </div>
    <StatsSection></StatsSection>


      <div className="cardwrapper">
  {cards.map((card, index) => (
    <div key={index} className="card-container" style={{ backgroundColor: card.color }}>
      <Card {...card} />
    </div>
  ))}
</div>
<h1 class="caption">
Discover expert coaching insights, success stories, and tips to elevate your personal and professional growth. 
  <span class="highlight">THE WOODS NEW EDITION.</span>
</h1>



    <HorizontalScroll articles={pages} />
<Dashboard></Dashboard>
    </div>
  );
}

