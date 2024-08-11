import React from "react";
import Button from "./Button";

interface EducationCardProps {
  image: string;
  startYear: string;
  endYear: string;
  subject: string;
  place: string;
  location: string;
  admissionLink: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  image,
  startYear,
  endYear,
  subject,
  place,
  location,
  admissionLink,
}) => {
  return (
    <div className="w-full bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button transition-all z-10 border-0 rounded-2xl p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 font-secondary">
          <div className="w-64 h-48">
            <img src={image} className="w-full h-full rounded-xl" />
          </div>
          <div className="flex flex-col pl-8 font-primary text-light-text">
            <div className="bg-[#545961] rounded-xl px-2 py-1 w-fit">
              <p>
                {startYear} - {endYear}
              </p>
            </div>
            <p className="text-light-text text-3xl mt-5 mb-6">{subject}</p>
            <p className="text-light-text text-xl mt-4 mb-2">{place}</p>
            <p className="text-[#878e99] text-base">{location}</p>
          </div>
        </div>
        <Button>
          <a href={admissionLink} target="_blank" rel="noopener noreferrer">
            Admission
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EducationCard;
