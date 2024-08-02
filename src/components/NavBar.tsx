import React from "react";
import lightLogo from "../assets/light-logo.png";
import Button from "./Button";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  const tittleAndLinks = [
    { title: "I am", link: "home", isActive: true },
    { title: "My Experience", link: "my-experience", isActive: false },
    { title: "Education", link: "education", isActive: false },
    { title: "Resume", link: "resume", isActive: false },
    { title: "Portfolio", link: "portfolio", isActive: false },
    { title: "Contact", link: "contact", isActive: false },
  ];

  return (
    <nav className="flex justify-between items-center border-b-2 px-8 py-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full overflow-hidden w-16 h-16 border-2 solid ml-4 border-gray-400">
          <img src={lightLogo} className="w-full h-full object-cover" />
        </div>
        <div className="font-semibold text-light-text uppercase">
          <div>Stefan</div>
          <div>Penchev</div>
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-12 uppercase">
          {tittleAndLinks.map((el, index) => (
            <NavItem key={index} title={el.title} link={el.link} isActive={el.isActive} />
          ))}
        </div>
       <Button className="">
          Hire me
       </Button>
      </div>
    </nav>
  );
};

export default NavBar;
