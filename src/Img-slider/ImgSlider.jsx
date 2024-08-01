import React, { useState } from 'react';
import './slider.css';

const ImageSlider = () => {
  const images = [
    'island.jpg',
    'rafting.jpg',
    'safari.jpg',
    'adventure.jpg',
    'village.jpg',
    'island.jpg',
    'rafting.jpg',
    'safari.jpg',
    'adventure.jpg',
    'village.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlider() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    console.log("i am prev");
  }

  function nextSlider() {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    console.log("i am next");

  }

  return (
    <>
    <div className="slider-container">

      <h1>Some Pics From Our Recent Tour's</h1>

 <div className="img-container">
        <div className="img-slider">
          {images.map((image, index) => (
          <div className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            transform: `translateX(-${currentIndex * 105}%) scale(${index === currentIndex ? 1.02 : 1})`, 
            opacity: index === currentIndex ? 1 : 0.6
          }}
          
          >
           <img key={index} src={image}  alt={`image ${index + 1}`} />
          </div>
            
          ))}
        </div>
      </div>
      <div className="slider-btn">
        <button onClick={prevSlider}>⏮️prev</button>
        <button onClick={nextSlider}>next⏭️</button>
      </div>


    </div>
     
    </>
  );
};

export default ImageSlider;