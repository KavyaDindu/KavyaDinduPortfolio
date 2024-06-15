import React from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedMetricProps {
  value: number;
  description: string;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  description,
}) => {
  const props = useSpring({
    to: { value },
    from: { value: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="text-center m-2 sm:m-3 md:m-4 lg:m-5">
      <animated.div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#001b5e]">
        {props.value.interpolate((x: number) => `${Math.floor(x)}%`)}
      </animated.div>
      <div className="text-sm sm:text-md md:text-lg text-gray-600">{description}</div>
    </div>
  );
};

export default AnimatedMetric;
