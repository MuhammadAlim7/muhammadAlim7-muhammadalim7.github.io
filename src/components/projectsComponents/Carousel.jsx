import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Carousel = ({
  handleImageLoad,
  transition,
  whileHover,
  isLoading,
  className,
  onClick,
  animate,
  images,
  id,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full ">
      <motion.img
        style={{ display: isLoading ? "none" : "block" }}
        onClick={onClick}
        animate={animate}
        whileHover={whileHover}
        transition={transition}
        className={`h-full w-full object-cover ${className}`}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        onLoad={handleImageLoad}
        key={currentIndex}
        id={id}
      />
      {/* Optionally, you can add indicators or navigation here */}
    </div>
  );
};

export default Carousel;
