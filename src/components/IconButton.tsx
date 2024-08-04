import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  link: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  link,
  className = "",
  onClick,
}) => {
  return (
    <a
      className={`flex items-center justify-center border border-transparent rounded-lg shadow-button ${className}`}
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default IconButton;
