import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Carousel2 = ({
  handleImageLoad,
  transition,
  whileHover,
  isLoading,
  className,
  onClick,
  animate,
  images,
  id,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Update the animation when currentIndex changes
    controls.start({
      x: `-${currentIndex * 100}%`,
      transition: { duration: 0.5 },
    });
  }, [currentIndex, controls]);

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div className="flex" animate={controls}>
        {images.map((item, index) => (
          <motion.img
            key={index}
            style={{ display: isLoading ? "none" : "block" }}
            src={item}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onLoad={handleImageLoad}
          />
        ))}
      </motion.div>
      {/* Optional: Add navigation controls */}
      {/* <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}>Previous</button>
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}>Next</button> */}
    </div>
  );
};

export default Carousel2;
