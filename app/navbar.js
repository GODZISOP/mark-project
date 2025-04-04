"use client"; // ✅ Mark this file as a client component
import { useState } from "react";

// Sample page data for demonstration


export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer visibility
  
  

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

    </div>
  );
}
