import React from "react";

interface DividerProps {
  labelName?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ labelName, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="flex-grow border-t border-gray-700"></span>
      {labelName && <span className="mx-2 text-light-text">{labelName}</span>}
      <span className="flex-grow border-t border-gray-700"></span>
    </div>
  );
};

export default Divider;
