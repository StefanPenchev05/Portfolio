import React, { useState } from "react";
import Button from "./Button";
import Reveal from "../Animations/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import ExpandableCard from "../Animations/ExpandableCard";

interface EducationCardProps {
  image: string;
  startYear: string;
  endYear: string;
  subject: string;
  place: string;
  location: string;
  admissionLink: string;
  description: string;
  achievements: string[];
  modules: string[];
  instructors: string[];
  testimonials: string[];
  gallery: string[];
  contactInfo: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  image,
  startYear,
  endYear,
  subject,
  place,
  location,
  admissionLink,
  description,
  achievements,
  modules,
  instructors,
  testimonials,
  gallery,
  contactInfo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="w-full bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button transition-all z-10 border-0 rounded-2xl p-8 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 font-secondary">
            <div className="w-full md:w-64 h-48 mb-4 md:mb-0">
              <img src={image} className="w-full h-full rounded-xl" />
            </div>
            <div className="flex flex-col pl-0 md:pl-8 font-primary text-light-text">
              <Reveal>
                <div className="bg-[#545961] rounded-xl px-2 py-1 w-fit">
                  <p>
                    {startYear} - {endYear}
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <p className="text-light-text text-xl md:text-3xl mt-5 mb-6">
                  {subject}
                </p>
                <p className="text-light-text text-lg md:text-xl mt-4 mb-2">
                  {place}
                </p>
                <p className="text-[#878e99] text-sm md:text-base">
                  {location}
                </p>
              </Reveal>
            </div>
          </div>
          <Button className="mt-4 md:mt-0">
            <a href={admissionLink} target="_blank" rel="noopener noreferrer">
              Admission
            </a>
          </Button>
        </div>
      </div>
      <ExpandableCard isExpanded={isExpanded} handleClick={handleClick}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 font-secondary">
            <div className="w-full md:w-64 h-48 mb-4 md:mb-0">
              <img src={image} className="w-full h-full rounded-xl" />
            </div>
            <div className="flex flex-col pl-0 md:pl-8 font-primary text-light-text">
              <Reveal>
                <div className="bg-[#545961] rounded-xl px-2 py-1 w-fit">
                  <p>
                    {startYear} - {endYear}
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <p className="text-light-text text-xl md:text-3xl mt-5 mb-6">
                  {subject}
                </p>
                <p className="text-light-text text-lg md:text-xl mt-4 mb-2">
                  {place}
                </p>
                <p className="text-[#878e99] text-sm md:text-base">
                  {location}
                </p>
              </Reveal>
            </div>
          </div>
          <Button className="mt-4 md:mt-0">
            <a href={admissionLink} target="_blank" rel="noopener noreferrer">
              Admission
            </a>
          </Button>
        </div>
        <div className="mt-8 text-light-text">
          {description && (
            <>
              <h3 className="text-2xl font-secondary font-semibold mb-6 animate-pulse">
                Description
              </h3>
              <div className="p-4 rounded-lg shadow-button text-light-text bg-gradient-to-r from-primary-red to-yellow-600 transform transition duration-500 hover:scale-100">
                <h3 className="text-xl font-bold mb-2 flex items-center animate-fadeIn">
                  <span className="mr-2 text-3xl">🎓</span> About Our School
                </h3>
                <p className="text-base">{description}</p>
                <button className="mt-4 px-4 py-2 bg-light-bg text-primary-red font-semibold rounded-full shadow-md hover:bg-primary-red hover:text-light-bg transition duration-300">
                  Learn More
                </button>
              </div>
            </>
          )}

          {achievements && achievements.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold font-secondary my-6 animate-pulse">
                Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-lg bg-dark-bg transform transition hover:scale-105"
                  >
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {modules && modules.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold mt-8 mb-4 animate-bounce">
                Course Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-lg bg-dark-bg transform transition hover:scale-105"
                  >
                    <p>{module}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {instructors && instructors.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold mt-8 mb-4 animate-bounce">
                Instructors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {instructors.map((instructor, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-lg bg-dark-bg transform transition hover:scale-105"
                  >
                    <p>{instructor}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {testimonials && testimonials.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold mt-8 mb-4 animate-bounce">
                Testimonials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-lg bg-dark-bg transform transition hover:scale-105"
                  >
                    <p>{testimonial}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {gallery && gallery.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold mt-8 mb-4 animate-bounce">
                Gallery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                ))}
              </div>
            </>
          )}

          {contactInfo && (
            <>
              <h3 className="text-2xl mt-8 mb-4 animate-bounce">
                Contact Information
              </h3>
              <p className="bg-dark-bg p-4 rounded-lg shadow-lg">
                {contactInfo}
              </p>
            </>
          )}
        </div>
      </ExpandableCard>
    </>
  );
};

export default EducationCard;
