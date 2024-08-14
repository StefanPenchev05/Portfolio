import React from "react";
import clickSound from '../assets/clickSound.wav'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  roundedFull?: boolean;
  isActiveColor?:boolean;
  fullWidth?: boolean;
  upperCase?:boolean;
  isActive?:boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  roundedFull = false,
  isActiveColor = true,
  fullWidth = false,
  upperCase = true,
  isActive = true
}) => {
  const baseClasses =
    `${upperCase ? "uppercase" : ""} ${isActiveColor ? "text-primary-red" : "text-light-text"} bg-gradient-to-b
    bg-transparent from-[#1e2024] to-[#23272b] 
    shadow-button transition-all z-10 
    text-sm font-medium border-0
    ${fullWidth ? "w-full" : "w-fit"}`;

  const roundedClasses = roundedFull
    ? "rounded-full w-12 h-12 flex flex-col items-center justify-center"
    : "rounded-md px-9 py-4";

    const handleClick = () => {
        const audio = new Audio(clickSound);
        audio.play();

        if(onClick){
            onClick();
        }
    }

  return (
    <button
      className={`${baseClasses} ${roundedClasses} ${className}`}
      onClick={handleClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
};

export default Button;
