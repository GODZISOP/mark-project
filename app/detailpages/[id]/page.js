"use client"; // ✅ Mark this file as a client component
import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/navbar";

// Sample page data for demonstration
const pageData = [
    { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "Dive into the updated edition of 'The Woods' series, where we guide you step-by-step through the exciting features of Next.js. Whether you're a beginner or looking to level up your skills, this resource will help you master the fundamentals of Next.js development with hands-on examples and practical tips", image: "/wood.png", color: "#f0f0f0" },
    { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
    { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "Exciting things are happening at the Frankfurt Book Fair this October! Join us as we showcase our expertise in React optimization. Whether you're a developer or a fan of cutting-edge technology, our presentation will provide key insights into making your React applications more efficient and scalable", image: "/woods.png", color: "#f0f0f0" },
    { id: 1, posted: "Posted on September 25, 2024", title: "THE WOODS NEW EDITION", description: "Dive into the updated edition of 'The Woods' series, where we guide you step-by-step through the exciting features of Next.js. Whether you're a beginner or looking to level up your skills, this resource will help you master the fundamentals of Next.js development with hands-on examples and practical tips", image: "/wood.png", color: "#f0f0f0" },
    { id: 2, posted: "September 25, 2024", title: "Another reason why you should grab The Woods", description: "Unlock the secrets behind 'The Woods' and discover why it’s a must-have in your web development toolkit. In this edition, we explore how mastering Next.js can take your design skills to the next level, providing you with tools to create stunning, performance-optimized websites", image: "/geensimple.webp", color: "#e0f7fa" },
    { id: 3, posted: "September 25, 2024", title: "join us at the Frankfurt Book Fair on October 16th", description: "Exciting things are happening at the Frankfurt Book Fair this October! Join us as we showcase our expertise in React optimization. Whether you're a developer or a fan of cutting-edge technology, our presentation will provide key insights into making your React applications more efficient and scalable", image: "/woods.png", color: "#f0f0f0" },
   
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
    <div className="page-container">
      <h1 className="page-title">{page.title}</h1>
      <p className="page-posted">{page.posted}</p>
      <img className="page-image" src={page.image} alt={page.title} />
      <p className="page-description">{page.description}</p>
    </div>
    </div>
  );
}
