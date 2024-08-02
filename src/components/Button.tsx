import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`
        uppercase text-primary-red rounded-md bg-gradient-to-b 
        bg-transparent from-[#1e2024] to-[#23272b] 
        shadow-button transition-all relative z-10 
        text-sm font-medium border-0 px-9 py-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
