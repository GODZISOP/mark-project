"use client"; // Required for client-side navigation

import { useRef } from "react";
import ArticleCard from "./component/pages";

const HorizontalScroll = ({ articles }) => {
  const scrollContainerRef = useRef(null);

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
        {articles.map((article) => (
          <div className="article-container" key={article.id}>
            <ArticleCard {...article} />
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
