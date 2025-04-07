"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="navbar-title">Build Your Life with Mark</h1>
        
        {/* Hamburger Menu */}
        <button 
          className={`hamburger-icon ${drawerOpen ? "active" : ""}`} 
          onClick={toggleDrawer}
          aria-label="Menu"
          aria-expanded={drawerOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="desktop-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/component/heroos" className="navbar-link">
            About
          </Link>
          <Link href="/component/contact" className="navbar-link">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <nav className="mobile-links">
          <Link href="/" className="navbar-link" onClick={closeDrawer}>
            Home
          </Link>
          <Link href="/component/heroos" className="navbar-link" onClick={closeDrawer}>
            About
            </Link>
            <Link href="/component/contact" className="navbar-link" onClick={closeDrawer}>
            Contact
          </Link>
        </nav>
        <button 
          className="cancel-btn" 
          onClick={closeDrawer}
          aria-label="Close menu"
        >
        </button>
      </div>
      
      {/* Overlay */}
      {drawerOpen && (
        <div className="overlay" onClick={closeDrawer}></div>
      )}
    </header>
  );
}