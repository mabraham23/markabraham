import React, { useState, useEffect, useRef } from "react";

function TypingText({ text, className, speed, fontSize }) {
  const [visibleText, setVisibleText] = useState([]);
  const [index, setIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && index < text.length) {
      const timer = setTimeout(() => {
        const char = text[index] === "#" ? <br key={index} /> : text[index];
        setVisibleText((prevVisibleText) => [...prevVisibleText, char]);
        setIndex(index + 1);
      }, speed); // Use the speed prop to set the typing speed
      return () => clearTimeout(timer);
    }
  }, [visibleText, index, text, speed, isIntersecting]);

  return (
    <span className={className} style={{ fontSize }} ref={ref}>
      {visibleText.map((char) => char)}
    </span>
  );
}

export default TypingText;
