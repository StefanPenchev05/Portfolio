import React from "react";

interface DividerProps {
  labelName?: string;
  className?: string;
  borderColor?: string;
}

const Divider: React.FC<DividerProps> = ({ labelName, className, borderColor }) => {
  const borderColorStyle = borderColor ? borderColor : "border-gray-700";
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`flex-grow border-t ${borderColorStyle}`}></span>
      {labelName && <span className="mx-2 text-light-text">{labelName}</span>}
      <span className={`flex-grow border-t ${borderColorStyle}`}></span>
    </div>
  );
};

export default Divider;
