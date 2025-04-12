"use client"; // Required for client-side navigation

import { useRef, useEffect } from "react";
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import the AOS CSS for styles
import ArticleCard from "./component/pages"; // Assuming ArticleCard is your component for displaying articles

const HorizontalScroll = ({ articles }) => {
  const scrollContainerRef = useRef(null);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Ensure animations only happen once when scrolling into view
    });
  }, []);

  // Function to scroll left by the width of one article
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth; // Get container's width
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Function to scroll right by the width of one article
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth; // Get container's width
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="horizontal-scroll-wrapper">
      {/* Left Scroll Button */}
      <button className="scroll-button left" onClick={handleScrollLeft}>
        &lt;
      </button>

      {/* Horizontal Scrollable Container */}
      <div className="scrolling-container" ref={scrollContainerRef}>
        {articles.map((article, index) => (
          <div
            className="article-container"
            key={article.id}
            data-aos="fade-up" // AOS fade-up effect
            data-aos-duration="1000" // Animation duration
            data-aos-delay={`${index * 100}`} // Delay based on index to create a staggered effect
          >
            <ArticleCard {...article} /> {/* Pass article data to the ArticleCard */}
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button className="scroll-button right" onClick={handleScrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalScroll;
