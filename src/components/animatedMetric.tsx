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
    <div className="text-center m-5">
      <animated.div className="text-3xl font-bold text-[#001b5e]">
        {props.value.interpolate((x: number) => `${Math.floor(x)}%`)}
      </animated.div>
      <div className="text-lg text-gray-600">{description}</div>
    </div>
  );
};

export default AnimatedMetric;
