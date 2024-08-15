import React from "react";

interface SkillBarProps {
  skill: string;
  percent: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percent }) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between w-full text-xs text-light-text-200 font-extralight font-secondary">
        <span className="uppercase">{skill}</span>
        <span>{percent}%</span>
      </div>
      <div className="border-2 border-dark-bg h-3 rounded-3xl shadow-progress-inset">
        <span
          className="block h-full bg-progress-gradient rounded-3xl"
          style={{ width: `${percent}%` }}
        ></span>
      </div>
    </div>
  );
};

export default SkillBar;
