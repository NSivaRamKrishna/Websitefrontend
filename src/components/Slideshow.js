import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideOptionClick = (index) => {
    setCurrentImageIndex(index);
  };

  const slideOptions = images.map((_, index) => (
    <button
      key={index}
      onClick={() => handleSlideOptionClick(index)}
      className={`slide-option ${index === currentImageIndex ? 'active' : ''}`}
    >
      o
    </button>
  ));

  return (
    <div className="slideshow-container" style={{ marginTop: '20px', position: 'relative' }}>
      <img
        src={images[currentImageIndex]}
        alt="Slideshow"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="slide-options-container">
        <div className="slide-options">{slideOptions}</div>
      </div>
    </div>
  );
};

export default Slideshow;
