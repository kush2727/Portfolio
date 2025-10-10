// src/components/ScrollRevealWrapper.js
import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        duration: 800,
        distance: "50px",
        easing: "ease-in-out",
        origin: "bottom",
        reset: false,
      });
    }
  }, []);

  return <div ref={sectionRef}>{children}</div>;
};

export default ScrollRevealWrapper;
