import React from 'react';
import './Proficiency.css';

const Proficiency = ({ image, description }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="proficiency">
      <div className="image-container">
        <img src={image} alt="Proficiency" />
      </div>
      <button onClick={toggleDescription} className="arrow-btn">
        {showDescription ? '▲' : '▼'}
      </button>
      <div className={`description ${showDescription ? 'visible' : 'hidden'}`}>
        {description}
      </div>
    </div>
  );
};

export default Proficiency;
