import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, and loop back to 0 if it exceeds the number of images
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval as needed (e.g., every 3 seconds)

    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [images.length]); // Re-run the effect if the number of images changes

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-item-${index}`}
          className={index === currentIndex ? 'visible' : 'hidden'}
        />
      ))}
    </div>
  );
};

export default Carousel;
