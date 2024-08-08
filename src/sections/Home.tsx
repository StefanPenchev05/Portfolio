import { useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandCpp,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandRust,
} from "react-icons/tb";

import HomeAvatar from "../assets/home-logo.png";
import Divider from "../components/Divider";

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

const bestSkillOn = [
  {
    component: <TbBrandCpp className="text-blue-600 w-1/2 h-1/2" />,
  },
  {
    component: <TbBrandNodejs className="text-green-600 w-1/2 h-1/2" />,
  },
  {
    component: <TbBrandRust className="text-red-600 w-1/2 h-1/2" />,
  },
  {
    component: <TbBrandMongodb className="text-green-600 w-1/2 h-1/2" />,
  },
];

const Home = () => {
  const texts = ["Full-Stack Developer.", "Professional Coder.", "Student."];
  const [textIndex, setTextIndex] = useState<number>(0);
  const [isDeletingText, setIsDeletingText] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeletingText) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeletingText(false);
          setTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText.length === currentText.length) {
          setTimeout(() => setIsDeletingText(true), 1000);
        }
      }
    };

    const interval = setInterval(handleTyping, isDeletingText ? 100 : 100);

    return () => clearInterval(interval);
  }, [displayedText, isDeletingText, textIndex]);

  return (
    <section className="bg-dark-bg pt-6 py-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex xl:space-y-0 xl:flex-row flex-col-reverse items-center justify-between w-4/5">
          <div className="xl:px-2 px-0 xl:w-1/2 w-full space-y-24 xl:mt-0 mt-8">
            <div className="space-y-12 text-light-text">
              <div className="space-y-8 font-secondary">
                <p className="uppercase font-thin text-sm max-xl:text-center leading-relaxed tracking-widest">
                  Welcome to my professional portfolio
                </p>
                <div className="text-pretty text-2xl md:text-4xl xl:text-5xl text-light-bg leading-b1 h-fit">
                  <b>
                    Hello, I’m{" "}
                    <span className="text-primary-red">Stefan Penchev</span>
                  </b>
                  <div className="box-border text-xl md:text-4xl xl:text-5xl tracking-widest">
                    <b>a </b>
                    <b className="animate-blink-caret border-r-2">
                      {displayedText}
                    </b>
                  </div>
                </div>
              </div>
              <p className="text-wrap text-base leading-relaxed font-primary">
                I am a <span className="font-bold">19-year-old programmer</span>{" "}
                with{" "}
                <span className="font-bold">eight years of experience</span>.
                <br />I have a passion for{" "}
                <span className="font-bold">
                  building creative front-end visualizations
                </span>{" "}
                and
                <br />
                <span className="font-bold">
                  developing complex backend systems
                </span>
                .
                <br />
                <span className="italic">
                  Student at University of Luxembourg.
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-6 xl:flex-row xl:space-y-0">
              <div className="flex flex-col space-y-4 w-full">
                <p className="uppercase text-sm text-light-text">
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
              <div className="flex">
                <div className="flex flex-col space-y-4 w-full">
                  <p className="uppercase text-sm text-light-text">
                    Best Skill on
                  </p>
                  <div className="flex space-x-4">
                    {bestSkillOn.map((el) => (
                      <IconButton isButton={false} className="w-14 h-14">
                        {el.component}
                      </IconButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center xl:w-1/3 w-full">
            <IconButton isButton={false}>
              <img src={HomeAvatar} alt="Avatar" />
            </IconButton>
          </div>
        </div>
      </div>
      <Divider className="mt-28 xl:px-36 px-0" borderColor="border-black" />
    </section>
  );
};

export default Home;
