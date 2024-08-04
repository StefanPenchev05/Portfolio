import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  roundedFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  roundedFull = false,
}) => {
  const baseClasses =
    "uppercase text-primary-red bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button transition-all z-10 text-sm font-medium border-0";

  const roundedClasses = roundedFull
    ? "rounded-full w-12 h-12 flex flex-col items-center justify-center"
    : "rounded-md px-9 py-4";

  return (
    <button
      className={`${baseClasses} ${roundedClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
