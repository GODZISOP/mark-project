import Image from "next/image";

const Card = ({ category, title, description, image, color }) => {
  return (
    <div className="card-container1">
      <div className="card-container" style={{ backgroundColor: color }}>
        <Image src={image} alt={title} className="card-image" width={280} height={160} />
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
