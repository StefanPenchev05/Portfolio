import React from "react";
import FeatureCard from "../components/FeatureCard";

import {
  HiOutlineCpuChip,
  HiOutlineMicrophone,
  HiOutlineBookmark,
  HiOutlinePuzzlePiece,
  HiOutlineCloud
} from "react-icons/hi2";

import { GiGearStickPattern } from "react-icons/gi";

const features = [
  {
    icon: <HiOutlineCpuChip className="text-red-600 w-16 h-16" />,
    title: "Full Stack Development",
    description:
      "Skilled in full stack development using the MERN stack. Demonstrated expertise in creating dynamic frontends and powerful backends",
  },
  {
    icon: <HiOutlineMicrophone className="text-red-600 w-16 h-16" />,
    title: "Communication Skills",
    description:
      "Exceptional communicator adept at discussing complex technical concepts with diverse audiences, ensuring clarity and understanding across all levels of expertise.",
  },
  {
    icon: <HiOutlineBookmark className="text-red-600 w-16 h-16" />,
    title: "Teaching and Mentorship",
    description:
      "Passionate educator in programming, mentoring young learners and peers in languages ranging from Scratch to advanced JavaScript",
  },
  {
    icon: <HiOutlinePuzzlePiece className="text-red-600 w-16 h-16" />,
    title: "Problem Solving",
    description:
      "Advanced problem-solving skills with a focus on creating innovative solutions to complex software challenges, improving system functionality and user satisfaction.",
  },
  {
    icon: <GiGearStickPattern className="text-red-600 w-16 h-16" />,
    title: "Technological Adaptability",
    description:
      "Highly adaptable to new technologies and shifting project requirements, continuously learning and applying new skills to remain at the forefront of software development.",
  },
  {
    icon: <HiOutlineCloud className="text-red-600 w-16 h-16" />,
    title: "Data Management",
    description:
      "Proficient in handling complex data structures and databases, ensuring robust data integrity and security in software applications."
  },
];

const Features = () => {
  return (
    <section className="bg-dark-bg pt-6 py-16">
      <div className="flex items-center justify-center w-full">
        <div className="w-4/5 space-y-12">
          <div className="text-pretty font-secondary">
            <p className="uppercase text-primary-red">Features</p>
            <b className="text-5xl text-light-text">What I Do</b>
          </div>
          <div className="flex flex-wrap">
            {features.map((el, index) => (
              <FeatureCard
                icon={el.icon}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
