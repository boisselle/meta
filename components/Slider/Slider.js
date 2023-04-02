import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.img
            key={image}
            src={`/images/slideshow/${image}`}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
