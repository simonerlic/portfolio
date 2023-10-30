"use client"

import React, { useState } from 'react';
import Circle from './Circle';

const CircleContainer = () => {
  const [proximity, setProximity] = useState(20); // Default radius

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const circleX = window.innerWidth / 2; // Assuming circle is at the center of the screen
    const circleY = window.innerHeight / 2; // Assuming circle is at the center of the screen

    const distance = Math.hypot(circleX - mouseX, circleY - mouseY);
    const maxDistance = Math.hypot(window.innerWidth, window.innerHeight);
    const proximity = Math.max(10, 40 - (distance / maxDistance) * 100); // Minimum radius is 20

    setProximity(proximity);
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <svg width="100%" height="100%">
        <Circle proximity={proximity} />
      </svg>
    </div>
  );
};

export default CircleContainer;
