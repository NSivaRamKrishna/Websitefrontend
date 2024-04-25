// Gallery.js
import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import './Gallery.css'; // Import Gallery.css for additional styling

const Gallery = () => {
  // Sample image URLs (replace with your actual image URLs)
  const images = [
    'https://jntugvcev.edu.in/wp-content/uploads/2020/08/20200103_072743-scaled.jpg',
    'https://jntugvcev.edu.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-02-26-at-10.51.44-AM.jpeg',
    'https://jntugvcev.edu.in/wp-content/uploads/2020/08/20200221_090906-scaled.jpg',
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
