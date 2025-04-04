"use client"; // Required for client-side navigation

import Link from "next/link";
import Image from "next/image";

const ArticleCard = ({ id, category, title, description, image, color, posted }) => {
  return (
    <div>
      {/* Link with prefetch enabled for fast navigation */}
      <Link href={`/detailpages/${id}`} passHref prefetch={true}>
        <div className="article-container cursor-pointer">
          {/* Date of posting */}
          <div className="article-posted-date">{posted}</div>

          <div className="article-body" style={{ backgroundColor: color }}>
            {/* Image above the article content */}
            <Image 
              src={image} 
              alt={title} 
              className="article-image" 
              width={700} 
              height={400} 
              priority
            />

            {/* Article content */}
            <div className="article-content">
              <p className="article-category">{category}</p>
              <h3 className="article-title">{title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
