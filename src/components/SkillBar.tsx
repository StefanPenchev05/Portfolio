import React, { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percent: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percent }) => {
  const [animationWidth, setAnimationWidth] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationWidth((prevWidth) => {
        if (prevWidth === percent) {
          clearInterval(interval);
          return percent;
        }

        return prevWidth + 1;
      });
    }, 3);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div
      className="w-full space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex items-center justify-between text-xs text-light-text-200 font-extralight font-secondary"
        style={{ width: `${animationWidth}%` }}
      >
        <span className="uppercase">{skill}</span>
        <span>{percent}%</span>
      </div>
      <div className="relative">
        <div className="border-2 border-dark-bg h-3 rounded-3xl shadow-progress-inset">
          <span
            className={`block h-full rounded-3xl transition-all duration-300 ${
              isHovered ? "bg-hover-gradient" : "bg-progress-gradient"
            }`}
            style={{ width: `${animationWidth}%` }}
          ></span>
        </div>
        {isHovered && (
          <div className="absolute top-0 left-0 mt-1 ml-2 p-1 bg-dark-bg text-white text-xs rounded shadow-lg">
            {skill}: {percent}%
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillBar;
