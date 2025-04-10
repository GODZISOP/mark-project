"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer/page";
import Card from "./card";
import Link from "next/link";
import Pages from "./component/pages";
import ArticleCard from "./component/pages";
import Navbar from "./navbar";
import { useState } from "react";
import HorizontalScroll from "./horzontal";

import Dashboard from "./component/dashboard/page";
import Booking from "./Booking/page";
import HeroSection from "./component/hero/page";
export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer visibility


  
  const pages = [
    { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "https://www.kobo.com/ww/en/ebook/the-woods-57", image: "/wood.png", color: "#f0f0f0" },
    { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
    { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "October 16th, Frankfurt book fair, The Woods is taking part. After LA, growing strong and sharing more. Are you coming?", image: "/woods.png", color: "#f0f0f0" },
    { id: 4, posted: "Posted on September 25, 2024", title: "Walkin’ on world’s ground", description: "Had a pleasure of participating in this grand world like event and The Woods had it’s place. You have to shoot for the sky to actually hit the sky. There are hits and there are misses. Hits lead to more hits with some more possible misses. So keep tryi’n cause when you reach the sky, you simply wanna keep moving. Guess what… that never ends. I am super appreciative for The Woods reaching more people every passing moment. I appreciate you and congratulate you. Cheers", image: "/party.jpg", color: "#f0f0f0" },
    { id: 5, posted: "September 24, 2024", title: "BUILD UP AND CARRY YOU DAY", description: "Energy leads to movement and movement creates strength. You are the owner of that so own it as you should. You feel the power with every move you make and that speak to you through your core. Your core is your true self and nothing is stronger then that. Once you realize that, you get on the way to realize everything else cause that creates the space of everything. That is your breakthrough.", image: "/the.jpg", color: "#e0f7fa" },
    { id: 6, posted: "feb 13, 2024", title: "Sunny LA awaits", description: "", image: "/discovery.png", color: "#f0f0f0" },
   
  ]


  const cards = [
    {
      category: "",
      title: "SPIRITUAL",
      description: "This is a part that supports each aspect of your life and goes to the core of things. We work on how spiritual you are and how that works and supports you in every aspect of your life..",
      image: "/create.jpg", // Replace with actual image path
      color: "gainsboro"
    },
    {
      image: "/nature.jpg", // Replace with actual image path
      title: "ENERGY ",
      description: "Energy is everything and we work on yours. We work on your energy levels and reach higher state of your awareness.",
      color: "darkseagreen",
    },
    {
      image: "/ocean.jpg", // Replace with actual image path
      color: "lightblue", // Gold"
      title: "CREATIVITY",
      description: "Equally important in you personal and professional growth. Creativity is a matter of many different elements coming and working together. Being creative means being your own master of creating things and developing your life and business",
    },
    {
      title: "RELATIONSHIP",
      description: " We crack the code of what they mean to you based on where you are in your life. We tackle what your relationship goals are and why. By doing so, you gain a different picture of where you are and what you will do.",
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

  // Close drawer and navigate when a link is clicked (for mobile)
  const handleLinkClick = () => {
    if (drawerOpen) {
      closeDrawer(); // Close drawer when a link is clicked on mobile
    }
  };

  // Determine the active link by checking the router's current pathname
  const getLinkClass = (path) => {
    return router.pathname === path ? "navbar-link active" : "navbar-link";
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
     <Booking></Booking>
        <HeroSection></HeroSection>


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
<Footer></Footer>

    </div>
  );
}

