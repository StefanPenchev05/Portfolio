import React, { useState } from "react";
import lightLogo from "../assets/light-logo.png";
import Button from "./Button";
import NavItem from "./NavItem";
import Avatar from "./Avatar";
import Divider from "./Divider";

import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";
import IconButton from "./IconButton";

const tittleAndLinks = [
  { title: "I am", link: "home" },
  { title: "My Experience", link: "my-experience" },
  { title: "Education", link: "education" },
  { title: "Resume", link: "resume" },
  { title: "Portfolio", link: "portfolio" },
  { title: "Contact", link: "contact" },
];

const contactSocialMediaLinks = [
  {
    component: <TbBrandFacebook className="text-light-text w-1/2 h-1/2" />,
    link: "https://www.facebook.com/stefcho.penchev/",
  },
  {
    component: <TbBrandInstagram className="text-light-text w-1/2 h-1/2" />,
    link: "https://www.instagram.com/_stefan.penchev_/",
  },
  {
    component: <TbBrandLinkedin className="text-light-text w-1/2 h-1/2" />,
    link: "https://www.linkedin.com/in/stefan-penchev-31b94a318",
  },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const NameHeader: React.FC = () => (
    <div className="font-semibold text-light-text uppercase">
      <div>Stefan</div>
      <div>Penchev</div>
    </div>
  );

  return (
    <nav className="flex justify-between items-center border-b-2 px-8 py-4">
      <div className="flex items-center space-x-4">
        <Avatar avatar={lightLogo} className="ml-4" />
        <NameHeader />
      </div>
      <div className="flex space-x-6 items-center">
        <div className="hidden xl:flex space-x-12 uppercase">
          {tittleAndLinks.map((el, index) => (
            <NavItem
              key={index}
              title={el.title}
              link={el.link}
              isActive={el.link === activeLink}
              onClick={() => handleLinkClick(el.link)}
            />
          ))}
        </div>
        <Button className="hidden xl:block">Hire me</Button>
        <Button
          className="xl:hidden space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          roundedFull={true}
        >
          <span className="block w-6 h-0.5 bg-primary-red"></span>
          <span className="block w-6 h-0.5 bg-primary-red"></span>
          <span className="block w-6 h-0.5 bg-primary-red"></span>
        </Button>
      </div>
      {isMenuOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 bg-black opacity-50 transition-opacity duration-1000"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </>
      )}
      <div
        className={`xl:hidden fixed left-0 top-0 w-96 p-8 h-full bg-[#191b1e] overflow-y-auto z-50 transform transition-transform duration-700 delay-100 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Button
          className="absolute top-8 right-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          roundedFull={true}
        >
          <span className="block w-6 h-0.5 bg-primary-red transform rotate-45"></span>
          <span className="block w-6 h-0.5 bg-primary-red transform -rotate-45 -mt-0.5"></span>
        </Button>
        <div className="flex flex-col space-y-12 min-h-full">
          <div className="space-y-6">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Avatar avatar={lightLogo} />
                <NameHeader />
              </div>
              <p className="text-gray-500 text-pretty leading-b1">
                Full-Stack Developer from Bulgaria, lives in Luxembourg,
                studying Computer Sience
              </p>
            </div>
            <Divider />
          </div>
          <div className="space-y-20">
            <div className="flex flex-col mb-12 space-y-6 uppercase">
              {tittleAndLinks.map((el, index) => (
                <NavItem
                  key={index}
                  title={el.title}
                  link={el.link}
                  isActive={el.title === activeLink}
                  onClick={() => handleLinkClick(el.title)}
                  className="text-base"
                />
              ))}
            </div>
            <Divider />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <p className="uppercase font-medium text-light-text">
              Find with me
            </p>

            <div className="flex space-x-4">
              {contactSocialMediaLinks.map((el, index) => (
                <IconButton className="w-14 h-14" link={el.link}>
                  {el.component}
                </IconButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
