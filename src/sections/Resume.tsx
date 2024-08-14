import React from "react";
import MainLayout from "../components/MainLayout";
import { Tab, Tabs } from "../components/Tabs";
import { EventCard, TimeLine } from "../components/TimeLine";

const Resume = () => {
  return (
    <MainLayout>
      <div className="w-4/5 space-y-12">
        <div className="text-center font-secondary w-full">
          <div className="uppercase text-primary-red flex justify-center space-x-2 mb-4">
            <span>8+ of Experience</span>
          </div>
          <b className="text-5xl text-light-text">My Resume</b>
        </div>
        <div>
          <Tabs className="space-x-4">
            <Tab label="Education">
              <div className="flex space-x-24 justify-between h-full">
                <div className="flex-grow">
                  <TimeLine title="Education Quality" duration="2016 - Current">
                    <EventCard
                      title="BSc in Computer Science"
                      location="University of Luxembourg"
                      duration="2024 - Current"
                      description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                  </TimeLine>
                </div>
                <div className="flex-grow">
                  <TimeLine title="Education Quality" duration="2016 - Current">
                    <EventCard
                      title="BSc in Computer Science"
                      location="University of Luxembourg"
                      duration="2024 - Current"
                      description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                  </TimeLine>
                </div>
              </div>
            </Tab>
            <Tab label="Skills">
              <div>Test</div>
            </Tab>
            <Tab label="Projects">
              <div>Test</div>
            </Tab>
            <Tab label="Volunteering" className="w-full bg-red-600">
              <div>Test</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;
