import React, { useState, useEffect, useRef } from "react";

function generateStars(count) {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      baseLeft: Math.random() * 100,
      baseTop: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      baseDuration: 20 + Math.random() * 20,
      delay: Math.random() * 30,
      opacity: Math.random() * 0.8 + 0.2,
      parallaxFactor: 0.1 + Math.random() * 0.4,
    });
  }
  return stars;
}

function generateMeteors(count) {
  let meteors = [];
  for (let i = 0; i < count; i++) {
    meteors.push({
      id: i,
      top: Math.random() * 80 + 5, // show in vertical (limited range)
      left: Math.random() * 100,
      duration: 1.5 + Math.random() * 1.5, // shooting duration
      delay: Math.random() * 10, // randomized start time
      angle: Math.random() * 30 - 15, // slight spread
      length: 80 + Math.random() * 50, // px
      width: 1 + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5,
    });
  }
  return meteors;
}

export default function InteractiveStarfield() {
  const [stars] = useState(() => generateStars(500));
  const [meteors, setMeteors] = useState(() => generateMeteors(6));
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mouseSpeed, setMouseSpeed] = useState(0);

  // To retrigger meteors at next random slot
  useEffect(() => {
    const interval = setInterval(() => {
      setMeteors(generateMeteors(6));
    }, 6000); // renew every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const lastMouse = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = performance.now();
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      const dt = now - lastMouse.current.time;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = dt > 0 ? dist / dt : 0;

      setMouseSpeed(speed);
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });

      lastMouse.current = { x: e.clientX, y: e.clientY, time: now };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function getDuration(base) {
    const speedFactor = 1 - Math.min(mouseSpeed * 50, 0.7);
    return base * (speedFactor < 0.3 ? 0.3 : speedFactor);
  }

  return (
    <div style={containerStyle}>
      {/* Stars */}
      {stars.map((star) => {
        const leftOffset = (mousePos.x - 0.5) * 20 * star.parallaxFactor;
        const topOffset = (mousePos.y - 0.5) * 20 * star.parallaxFactor;

        return (
          <div
            key={star.id}
            style={{
              ...starStyle,
              left: `calc(${star.baseLeft}% + ${leftOffset}px)`,
              top: `calc(${star.baseTop}% + ${topOffset}px)`,
              width: star.size,
              height: star.size,
              animationDuration: `${getDuration(star.baseDuration)}s`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
            }}
          />
        );
      })}

      {/* Meteors (shooting stars) */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            ...meteorStyle,
            left: `${meteor.left}%`,
            top: `${meteor.top}%`,
            width: `${meteor.length}px`,
            height: `${meteor.width}px`,
            opacity: meteor.opacity,
            transform: `rotate(${meteor.angle}deg)`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}

      {/* Keyframes */}
      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0);}
          100% { transform: translate(25vw, 15vh);}
        }
        @keyframes meteor {
          0% { opacity: 0; transform: translateX(0);}
          2% { opacity: 1;}
          85% { opacity: 1;}
          100% {opacity: 0; transform: translateX(60vw);}
        }
      `}</style>
    </div>
  );
}

const containerStyle = {
  position: "fixed",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: -1,
  backgroundColor: "#050517",
};

const starStyle = {
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "50%",
  animationName: "drift",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
};

const meteorStyle = {
  position: "absolute",
  background: "linear-gradient(90deg, white, #7edfff, transparent)",
  borderRadius: "1px",
  boxShadow: "0 0 5px 2px #aeefff",
  animationName: "meteor",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  opacity: 0,
};
