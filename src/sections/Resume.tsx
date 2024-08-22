import React from "react";
import MainLayout from "../components/MainLayout";
import { Tab, Tabs } from "../components/Tabs";
import { EventCard, TimeLine } from "../components/TimeLine";
import Reveal from "../Animations/Reveal";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";

import {
  TbBrandCpp,
  TbBrandPython,
  TbBrandMongodb,
  TbBrandGithub,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandRust,
} from "react-icons/tb";

import FinTrackerLogo from "../assets/FinTrackerLogo.png";
import LetsTalkLogo from "../assets/LetTalkLogo.webp";
import CPythonLogo from "../assets/CPythonLogo.webp";

const EducationTab = () => (
  <div className="flex flex-col md:flex-row space-y-24 md:space-y-0 md:space-x-24 justify-between h-full">
    <div className="flex-grow">
      <TimeLine title="Education Quality" duration="2016 - Current">
        <EventCard
          title="BSc in Computer Science"
          location="University of Luxembourg"
          duration="2024 - Current"
          description="Pursuing a Bachelor's degree in Computer Science."
        />
        <EventCard
          title="Mathematics, Informatics and English"
          location="Konstantin Velichkov Specialized Mathematics High School"
          duration="2020 - 2024"
          description="Studying Mathematics, Informatics, and English at a specialized high school."
        />
      </TimeLine>
    </div>
    <div className="flex-grow">
      <TimeLine title="Job Experience" duration="2023 - 2024">
        <EventCard
          title="Teaching JS, HTML, CSS and Scratch"
          location="MindHub, Pazardjik"
          duration="2023 - 2024"
          description="Instructing young learners in JavaScript, HTML, CSS, and Scratch programming."
        />
      </TimeLine>
    </div>
  </div>
);

const SkillTab = () => (
  <MainLayout>
    <div className="w-full flex flex-col md:flex-row max-md:space-y-20 md:space-x-36 items-start">
      <div className="w-full space-y-9">
        <div className="flex flex-col space-y-4">
          <span className="text-primary-red text-sm font-primary">
            Featrues
          </span>
          <span className="text-light-text text-4xl font-secondary font-bold">
            Development Skill
          </span>
        </div>
        <div className="w-full space-y-6">
          <SkillBar skill="MongoDB" percent={80} />
          <SkillBar skill="Express.js" percent={100} />
          <SkillBar skill="React" percent={90} />
          <SkillBar skill="Tailwindcss" percent={70} />
          <SkillBar skill="Node.js" percent={100} />
          <SkillBar skill="C/C++" percent={60} />
          <SkillBar skill="Rust" percent={40} />
        </div>
      </div>
      <div className="w-full space-y-9">
        <div className="flex flex-col space-y-4">
          <span className="text-primary-red text-sm font-primary">
            Featrues
          </span>
          <span className="text-light-text text-4xl font-secondary font-bold">
            Soft Skills
          </span>
        </div>
        <div className="w-full space-y-10">
          <SkillBar skill="Communication" percent={90} />
          <SkillBar skill="Teamwork" percent={85} />
          <SkillBar skill="Problem Solving" percent={80} />
          <SkillBar skill="Adaptability" percent={90} />
          <SkillBar skill="Leadership" percent={60} />
        </div>
      </div>
    </div>
  </MainLayout>
);

const project = [
  {
    picture:
      "https://www.kouchat.net/images/screenshots/console/kouchat_v1.2.0-main_console.png",
    title: "C-Chat",
    description:
      "The C-Chat project is a network chat console application designed to facilitate real-time communication between multiple users.",
    stack: [
      <TbBrandCpp className="text-[#00599C] text-2xl m-2" />,
      <TbBrandMysql className="text-[#00758F] text-2xl m-2" />,
    ],
    link: "",
  },
  {
    picture: FinTrackerLogo,
    title: "FinTracker",
    description:
      "FinTracker is a comprehensive financial tracking application designed to help users manage their personal finances.",
    stack: [
      <TbBrandNodejs className="text-[#68A063] text-2xl m-2" />,
      <TbBrandReact className="text-[#61DAFB] text-2xl m-2" />,
      <TbBrandTypescript className="text-[#3178C6] text-2xl m-2" />,
      <TbBrandMongodb className="text-[#4DB33D] text-2xl m-2" />,
      <TbBrandTailwind className="text-[#38B2AC] text-2xl m-2" />,
    ],
    link: "https://github.com/StefanPenchev05/FinTracker",
  },
  {
    picture:
      "https://github.com/StefanPenchev05/MyClothesV2/blob/main/Logo%20for%20MyClothes-Transparent.png?raw=true",
    title: "MyClothes",
    description:
      "MyClothes is a platform for designers to showcase their clothing products, receive feedback, engage in real-time chat, and get hired by clients.",
    stack: [
      <TbBrandNodejs className="text-[#68A063] text-2xl m-2" />,
      <TbBrandReact className="text-[#61DAFB] text-2xl m-2" />,
      <TbBrandTypescript className="text-[#3178C6] text-2xl m-2" />,
      <TbBrandMongodb className="text-[#4DB33D] text-2xl m-2" />,
      <TbBrandTailwind className="text-[#38B2AC] text-2xl m-2" />,
    ],
    link: "https://github.com/StefanPenchev05/MyClothes",
  },
  {
    picture: LetsTalkLogo,
    title: "Let's Talk",
    description:
      "Let's Talk is a communication platform that enables users to engage in real-time chat, share media, and collaborate effectively.",
    stack: [
      <TbBrandNodejs className="text-[#68A063] text-2xl m-2" />,
      <TbBrandReact className="text-[#61DAFB] text-2xl m-2" />,
      <TbBrandTypescript className="text-[#3178C6] text-2xl m-2" />,
      <TbBrandMongodb className="text-[#4DB33D] text-2xl m-2" />,
      <TbBrandTailwind className="text-[#38B2AC] text-2xl m-2" />,
      <TbBrandGithub className="text-[#333] text-2xl m-2" />,
    ],
    link: "https://github.com/StefanPenchev05/Lets-Talk",
  },
  {
    picture: CPythonLogo,
    title: "CPython Exploration",
    description:
      "CPython Exploration is a deep dive into the CPython implementation, providing insights and tools for understanding and extending Python.",
    stack: [
      <TbBrandPython className="text-[#FFD43B] text-2xl m-2" />,
      <TbBrandCpp className="text-[#00599C] text-2xl m-2" />,
      <TbBrandGithub className="text-[#333] text-2xl m-2" />,
    ],
    link: "https://github.com/StefanPenchev05/CPython-exploration",
  },
  {
    picture:
      "https://w7.pngwing.com/pngs/114/914/png-transparent-rust-programming-language-logo-machine-learning-haskell-crab-animals-cartoon-crab-thumbnail.png",
    title: "Rust Learning",
    description:
      "Rust Learning is a project aimed at exploring the Rust programming language, providing examples, tutorials, and insights into Rust development.",
    stack: [
      <TbBrandRust className="text-[#F74C00] text-2xl m-2" />,
      <TbBrandGithub className="text-[#333] text-2xl m-2" />,
    ],
    link: "https://github.com/StefanPenchev05/Rust-Learning",
  },
];

const ProjectTab = () => (
  <div className="flex justify-between flex-wrap">
    {project.map((card, index) => (
      <ProjectCard
        key={index}
        picture={card.picture}
        title={card.title}
        description={card.description}
        link={card.link}
      >
        {card.stack.map((icon, iconIndex) => (
          <React.Fragment key={iconIndex}>{icon}</React.Fragment>
        ))}
      </ProjectCard>
    ))}
  </div>
);

const Resume = () => {
  return (
    <MainLayout>
      <div className="w-4/5 space-y-12">
        <Reveal width="100%">
          <div className="text-center font-secondary w-full">
            <div className="uppercase text-primary-red flex justify-center space-x-2 mb-4">
              <span>8+ of Experience</span>
            </div>
            <b className="text-5xl text-light-text">My Resume</b>
          </div>
        </Reveal>
        <Tabs className="space-x-4">
          <Tab label="Education">
            <EducationTab />
          </Tab>
          <Tab label="Skills">
            <SkillTab />
          </Tab>
          <Tab label="Projects">
            <ProjectTab />
          </Tab>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Resume;
