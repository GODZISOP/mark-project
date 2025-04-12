'use client'; // Required for client-side rendering

import Image from 'next/image';

const Card = ({ category, title, description, image, color, index }) => {
  return (
    <div
      className="card-container1"
      data-aos="flip-down" // You can change this to other animations like 'fade-up', 'zoom-in', etc.
      data-aos-delay={index * 100} // Stagger each card by 100ms
      data-aos-once="false" // Ensure this allows the animation to trigger again when scrolling back
    >
      <div className="card-container" style={{ backgroundColor: color }}>
        <Image
          src={image}
          alt={title}
          className="card-image"
          width={280}
          height={160}
        />
        <div className="card-content">
          <p className="card-category">{category}</p>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
