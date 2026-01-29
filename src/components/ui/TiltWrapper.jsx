import React, { useRef, useState } from "react";

export const TiltWrapper = ({ children, className = "", rotationIntensity = 10 }) => {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the element center
    // range: -0.5 to 0.5
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation
    // rotateY is based on X position (tilt left/right)
    // rotateX is based on Y position (tilt up/down - negated for natural feel)
    const y = normalizedX * rotationIntensity;
    const x = -normalizedY * rotationIntensity;

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 transform-style-3d transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
