import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  link?: string;
  isButton?: boolean;
  className?: string;
  isFullRounded?: boolean;
  isRelative?: boolean;
  isAbsolute?: boolean;
  leftStyle?: string | number;
  zIndex?: string | number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  link,
  isButton = true,
  isFullRounded = false,
  className = "",
  isRelative = false,
  isAbsolute = false,
  leftStyle = undefined,
  zIndex = undefined,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      {isButton ? (
        <a
          className={`flex ${isRelative && "relative"} ${
            isAbsolute && "absolute"
          } items-center justify-center ${
            isFullRounded ? "rounded-full" : "rounded-lg"
          } shadow-button ${className}`}
          onClick={onClick}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ left: leftStyle, zIndex: zIndex }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </a>
      ) : (
        <div
          className={`flex ${isRelative && "relative"} ${
            isAbsolute && "absolute"
          } items-center justify-center  ${
            isFullRounded ? "rounded-full" : "rounded-lg"
          } shadow-button ${className}`}
          onClick={onClick}
          style={{ left: leftStyle, zIndex: zIndex }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default IconButton;
