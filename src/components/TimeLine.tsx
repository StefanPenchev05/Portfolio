import React, { useState } from "react";
import Divider from "./Divider";

interface TimeLineProps {
  children: React.ReactNode;
  title: string;
  duration: string;
}

const TimeLine: React.FC<TimeLineProps> = ({ children, title, duration }) => {
  return (
    <div className="space-y-8">
      <div className="font-secondary w-full">
        <div className="uppercase text-primary-red space-x-2 mb-2">
          <span>{duration}</span>
        </div>
        <b className="text-3xl text-light-text">{title}</b>
      </div>
      <div className="flex flex-row w-full h-full">
        <Pillar/>
        <div className="flex-grow space-y-14">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === EventCard) {
              return child;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

interface EventCardProps {
  title: string;
  location: string;
  description: string;
  duration: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  description,
  duration,
}) => {
  const [textColor, setTextColor] = useState<string>("text-[#878e99]");
  const [circleColor, setCircleColor] = useState<string>("bg-dark-bg");
  const [bgGradient, setBgGradient] = useState<string>("bg-gradient-to-b");


  return (
    <div className="relative flex flex-col md:flex-row space-y-0 md:space-y-14 w-full">
      <div
        className={`w-full h-80 ${bgGradient} shadow-button transition-all z-10 border-0 rounded-md px-10 py-11`}
        onMouseEnter={() => {
          setTextColor("text-light-text");
          setCircleColor("bg-primary-red");
          setBgGradient("bg-gradient-to-b-reverse");
        }}
        onMouseLeave={() => {
          setTextColor("text-[#878e99]");
          setCircleColor("bg-dark-bg");
          setBgGradient("bg-gradient-to-b");
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between pb-5">
            <div className="flex flex-col space-y-2 text-pretty w-2/3">
              <span className="text-light-text text-xs md:text-2xl">{title}</span>
              <span className={`text-xs md:text-sm ${textColor}`}>{location}</span>
            </div>
            <DurationLabel>{duration}</DurationLabel>
            <Divider orientation="horizontal" />
          </div>
          <Divider orientation="horizontal" className="border-[#17191c]" />
          <div className={`w-full text-pretty ${textColor} text-sm md:text-lg text-start`}>
            {description}
          </div>
        </div>
      </div>
      <Circle circleColor={circleColor}/>
      <div className="absolute border-t-4 top-2 border-[#17191c] w-4 z-10 -ml-[16px]"></div>
    </div>
  );
};

interface DurationLabelProps {
  children: React.ReactNode;
}

const DurationLabel: React.FC<DurationLabelProps> = ({ children }) => {
  return (
    <div
      className="
      bg-transparent from-[#1e2024] to-[#23272b] 
      shadow-button transition-all z-10 text-xs text-center
      md:text-sm font-medium border-0 h-fit w-2/3 md:w-fit p-4 text-primary-red"
    >
      {children}
    </div>
  );
};

interface CircleProps{
  circleColor: string;
}

const Circle:React.FC<CircleProps> = ({ circleColor }) => {
  return (
    <div
      className={`absolute ${circleColor} left-0 border-[5px] border-[#17191c] bg-dark-bg w-5 h-5 z-10 rounded-full -ml-[36px]`}
    >
      <span className="w-5 h-5 rounded-full"></span>
    </div>
  );
};

const Pillar = () => {
  return <div className="mr-6 border-l-4 border-[#17191c]"></div>;
};

export { TimeLine, EventCard };
