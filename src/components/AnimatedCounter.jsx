import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({
  startNumber = 0,
  endNumber = 10,
  fontColor = "#212121",
  fontSize = "10rem",
  fontWeight = "normal",
  fontFamily = "yg-jalnan",
  speed = 300,
  loop = false,
}) {
  const [count, setCount] = useState(startNumber);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible && startNumber !== endNumber) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount <= endNumber) {
            return newCount;
          } else if (loop) {
            return startNumber;
          }
          return prevCount;
        });
      }, speed);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isVisible, startNumber, endNumber, loop, speed]);

  return (
    <motion.div
      ref={ref}
      style={{
        lineHeight: 1,
        display: "inline-block",
        color: fontColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
      }}
    >
      {count}
    </motion.div>
  );
}
