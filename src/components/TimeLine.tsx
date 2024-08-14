import React, { useState } from "react";
import Button from "./Button";

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
      <div className="flex flex-row-reverse w-full h-full">
        <div className="flex-grow">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === EventCard) {
              return child;
            }
            return null;
          })}
        </div>
        <div className="mx-4 border-l-4 border-[#17191c]"></div>
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

  return (
    <div
      className="w-full bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button transition-all z-10 border-0 rounded-2xl px-10 py-11"
      onMouseEnter={() => setTextColor("text-light-text")}
      onMouseLeave={() => setTextColor("text-[#878e99]")}
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between pb-5">
          <div className="flex flex-col space-y-2">
            <span className="text-light-text text-2xl">{title}</span>
            <span className={`text-sm ${textColor}`}>{location}</span>
          </div>
          <Button isActive={false}>{duration}</Button>
        </div>
        <div className={`w-full text-pretty ${textColor}`}>{description}</div>
      </div>
    </div>
  );
};

const Circle = () => {
  return <div></div>;
};

const Pillar = () => {
  return <div></div>;
};

export { TimeLine, EventCard };
