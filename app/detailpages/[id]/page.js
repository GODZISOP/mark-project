"use client"; // ✅ Mark this file as a client component
import { useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/app/Footer/page";
import Navbar from "@/app/navbar";

// Sample page data for demonstration
const pageData = [
  { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "https://www.kobo.com/ww/en/ebook/the-woods-57", image: "/wood.png", color: "#f0f0f0" },
  { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
  { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "October 16th, Frankfurt book fair, The Woods is taking part. After LA, growing strong and sharing more. Are you coming?", image: "/woods.png", color: "#f0f0f0" },
  { id: 4, posted: "Posted on September 25, 2024", title: "Walkin’ on world’s ground", description: "Had a pleasure of participating in this grand world like event and The Woods had it’s place. You have to shoot for the sky to actually hit the sky. There are hits and there are misses. Hits lead to more hits with some more possible misses. So keep tryi’n cause when you reach the sky, you simply wanna keep moving. Guess what… that never ends. I am super appreciative for The Woods reaching more people every passing moment. I appreciate you and congratulate you. Cheers", image: "/party.jpg", color: "#f0f0f0" },
  { id: 5, posted: "September 24, 2024", title: "BUILD UP AND CARRY YOU DAY", description: "Energy leads to movement and movement creates strength. You are the owner of that so own it as you should. You feel the power with every move you make and that speak to you through your core. Your core is your true self and nothing is stronger then that. Once you realize that, you get on the way to realize everything else cause that creates the space of everything. That is your breakthrough.", image: "/the.jpg", color: "#e0f7fa" },
  { id: 6, posted: "feb 13, 2024", title: "Sunny LA awaits", description: "", image: "/discovery.png", color: "#f0f0f0" },
 
  ]


export default function PageDetail() {
  const { id } = useParams(); // Get the dynamic id from the route
  const page = pageData.find((item) => item.id === parseInt(id)); // Find the page data based on the id
    const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer visibility
  
  if (!page) {
    return <p>Page not found</p>; // Handle case where no page is found for the id
  }

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };


  return (
    <div>
  <Navbar></Navbar>
    <div className="page-container">
      <h1 className="page-title">{page.title}</h1>
      <p className="page-posted">{page.posted}</p>
      <img className="page-image" src={page.image} alt={page.title} />
      <p className="page-description">{page.description}</p>
    </div>
    <Footer></Footer>
    </div>
  );
}
