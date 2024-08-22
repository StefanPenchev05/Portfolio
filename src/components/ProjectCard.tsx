import React, { useState } from "react";
import { IconType } from "react-icons";
import IconButton from "./IconButton";
import Button from "./Button";

interface ProjectCardProps {
  children: React.ReactNode;
  picture: string;
  title: string;
  link?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  picture,
  title,
  link,
  description,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-[400px] bg-gradient-to-br from-[#1e2024] to-[#23272b] shadow-button space-y-4 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl mb-14">
      <img
        src={picture}
        alt={title}
        className="w-full h-48 object-cover rounded-3xl"
      />
      <div className="flex flex-col space-y-4 p-4">
        <b className="text-xl font-bold text-white">{title}</b>
        <p className="text-pretty text-[#878e99]">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex justify-between -space-x-3 w-fit h-10">
            {React.Children.map(children, (child, index) => {
              const zIndex = hoveredIndex === index ? 100 : index * 10;

              return (
                <IconButton
                  key={index}
                  isButton={false}
                  isFullRounded={true}
                  className={`hover:z-50 bg-dark-bg transform transition-all duration-300 hover:scale-110`}
                  zIndex={zIndex}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {child}
                </IconButton>
              );
            })}
          </div>
          <Button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transform transition-all duration-300"
            >
              Check on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
