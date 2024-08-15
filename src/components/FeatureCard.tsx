import React from 'react';
import Reveal from '../Animations/Reveal';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-start py-6 px-8 space-y-4 sm:py-9 sm:px-12 sm:space-y-6 w-full sm:w-[400px] h-auto sm:h-[347px] bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button transition-all z-10 border-0 rounded-2xl mr-0 mb-6 sm:mr-12 sm:mb-12`}
    >
      {icon}
      <Reveal><b className="text-lg text-light-text">{title}</b></Reveal>
      <Reveal>
        <p className="text-wrap text-light-text">{description}</p>
      </Reveal>
    </div>
  );
};

export default FeatureCard;
