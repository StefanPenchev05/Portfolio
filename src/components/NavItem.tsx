import React from 'react';
import { Link } from 'react-scroll';

interface NavItemProps {
    title: string;
    link: string;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, link, isActive }) => (
    <Link 
      to={link}
      smooth={true}
      duration={500}
      className={`${isActive ? "text-white" : "text-light-text"} text-sm font-thin`}
    >
      {title}
    </Link>
  );

export default NavItem;
