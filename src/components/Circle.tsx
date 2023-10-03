"use client"

import { animated, useSpring } from 'react-spring';

interface CircleProps {
  proximity: number;
}

const Circle = ({ proximity }: CircleProps) => {
  const { r } = useSpring({
    r: proximity
  });

  return (
    <animated.circle
      cx="50%"
      cy="50%"
      r={r.to((r: number) => r)}
      fill="white"
      opacity={0.05}
    />
  );
};

export default Circle;
