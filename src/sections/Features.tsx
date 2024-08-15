import React from "react";
import FeatureCard from "../components/FeatureCard";

import {
  HiOutlineCpuChip,
  HiOutlineMicrophone,
  HiOutlineBookmark,
  HiOutlinePuzzlePiece,
  HiOutlineCloud,
} from "react-icons/hi2";

import { GiGearStickPattern } from "react-icons/gi";
import MainLayout from "../components/MainLayout";
import Divider from "../components/Divider"
import Reveal from "../Animations/Reveal";

const features = [
  {
    icon: <HiOutlineCpuChip className="text-primary-red w-16 h-16" />,
    title: "Full Stack Development",
    description:
      "Skilled in full stack development using the MERN stack. Demonstrated expertise in creating dynamic frontends and powerful backends",
  },
  {
    icon: <HiOutlineMicrophone className="text-primary-red w-16 h-16" />,
    title: "Communication Skills",
    description:
      "Exceptional communicator adept at discussing complex technical concepts with diverse audiences, ensuring clarity and understanding across all levels of expertise.",
  },
  {
    icon: <HiOutlineBookmark className="text-primary-red w-16 h-16" />,
    title: "Teaching and Mentorship",
    description:
      "Passionate educator in programming, mentoring young learners and peers in languages ranging from Scratch to advanced JavaScript",
  },
  {
    icon: <HiOutlinePuzzlePiece className="text-primary-red w-16 h-16" />,
    title: "Problem Solving",
    description:
      "Advanced problem-solving skills with a focus on creating innovative solutions to complex software challenges, improving system functionality and user satisfaction.",
  },
  {
    icon: <GiGearStickPattern className="text-primary-red w-16 h-16" />,
    title: "Technological Adaptability",
    description:
      "Highly adaptable to new technologies and shifting project requirements, continuously learning and applying new skills to remain at the forefront of software development.",
  },
  {
    icon: <HiOutlineCloud className="text-primary-red w-16 h-16" />,
    title: "Data Management",
    description:
      "Proficient in handling complex data structures and databases, ensuring robust data integrity and security in software applications.",
  },
];

const Features = () => {
  return (
    <MainLayout>
      <div className="w-4/5 space-y-12">
        <div className="text-center text-pretty font-secondary w-full">
          <Reveal width="100%">
            <p className="uppercase text-primary-red mb-4">Features</p>
            <b className="text-5xl text-light-text">What I Do</b>
          </Reveal>
        </div>
        <div className="flex flex-wrap">
          {features.map((el, index) => (
            <FeatureCard
              key={index}
              icon={el.icon}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
        <Divider borderColor="border-black" />
      </div>
    </MainLayout>
  );
};

export default Features;
