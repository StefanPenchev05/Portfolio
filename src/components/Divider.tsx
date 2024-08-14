import React from "react";

interface DividerProps {
  labelName?: string;
  className?: string;
  borderColor?: string;
  orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({ labelName, className, borderColor, orientation = "horizontal" }) => {
  const borderColorStyle = borderColor ? borderColor : "border-gray-700";
  const isHorizontal = orientation === "horizontal";

  return (
    <div className={`flex ${isHorizontal ? "items-center" : "flex-col"} ${className}`}>
      <span className={`flex-grow ${isHorizontal ? "border-t" : "border-l"} ${borderColorStyle}`}></span>
      {labelName && <span className={`mx-2 ${isHorizontal ? "text-light-text" : "my-2"}`}>{labelName}</span>}
      <span className={`flex-grow ${isHorizontal ? "border-t" : "border-l"} ${borderColorStyle}`}></span>
    </div>
  );
};

export default Divider;
