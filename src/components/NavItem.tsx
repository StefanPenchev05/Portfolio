import React from "react";
import { Link } from "react-scroll";

interface NavItemProps {
  title: string;
  link: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  link,
  isActive,
  onClick,
  className
}) => (
  <Link
    to={link}
    smooth={true}
    duration={500}
    className={`${
      isActive ? "text-white" : "text-light-text"
    } cursor-pointer text-sm font-thin hover:text-primary-red ` + className}
    onClick={onClick}
  >
    {title}
  </Link>
);

export default NavItem;
