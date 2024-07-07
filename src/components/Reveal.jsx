import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const Reveal = ({
  children,
  overflowVisible,
  setSide,
  className,
  id,
  onClick,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const mainControls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isBelowViewport = top <= window.innerHeight;
        setIsVisible(isBelowViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isVisible) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isVisible]);
  const dynamicStyle = overflowVisible
    ? { overflow: "visible" }
    : { overflow: "hidden" };
  const sideOrNot = setSide
    ? {
        hidden: { opacity: 0, x: -150 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 18,
            stiffness: 100,

            delay: 0.25 * (0.5 * id),
          },
        },
      }
    : {
        hidden: { opacity: 0, y: 75, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            damping: 15.5,
            stiffness: 110,

            delay: 0.25 * (0.5 * id),
          },
        },
      };
  return (
    <motion.div
      id={id}
      ref={ref}
      onClick={onClick}
      style={{ ...dynamicStyle }}
      variants={{ ...sideOrNot }}
      initial="hidden"
      animate={mainControls}
      className={className}
    >
      {children}
    </motion.div>
  );
};
