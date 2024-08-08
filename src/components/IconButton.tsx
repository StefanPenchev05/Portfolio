import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  link?: string;
  isButton?: boolean;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  link,
  isButton = true,
  className = "",
  onClick,
}) => {
  return (
    <>
      {isButton ? (
        <a
          className={`flex items-center justify-center border border-transparent rounded-lg shadow-button ${className}`}
          onClick={onClick}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <div
          className={`flex items-center justify-center border border-transparent rounded-lg shadow-button ${className}`}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default IconButton;
