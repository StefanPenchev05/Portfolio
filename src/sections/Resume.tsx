import MainLayout from "../components/MainLayout";
import { Tab, Tabs } from "../components/Tabs";
import { EventCard, TimeLine } from "../components/TimeLine";
import Reveal from "../Animations/Reveal";
import SkillBar from "../components/SkillBar";

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
                    <span className="text-primary-red text-sm font-primary">Featrues</span>
                    <span className="text-light-text text-4xl font-secondary font-bold">Development Skill</span>
                </div>
                <div className="w-full space-y-10">
                    <SkillBar
                        skill="html"
                        percent={100}
                    />
                     <SkillBar
                        skill="html"
                        percent={85}
                    />
                     <SkillBar
                        skill="html"
                        percent={85}
                    />
                </div>
            </div>
            <div className="w-full space-y-9">
                <div className="flex flex-col space-y-4">
                    <span className="text-primary-red text-sm font-primary">Featrues</span>
                    <span className="text-light-text text-4xl font-secondary font-bold">Development Skill</span>
                </div>
                <div className="w-full space-y-10">
                    <SkillBar
                        skill="html"
                        percent={85}
                    />
                     <SkillBar
                        skill="html"
                        percent={85}
                    />
                     <SkillBar
                        skill="html"
                        percent={85}
                    />
                </div>
            </div>
        </div>
    </MainLayout>
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
            <EducationTab/>
          </Tab>
          <Tab label="Skills">
            <SkillTab/>
          </Tab>
          <Tab label="Projects">
            <div>Test</div>
          </Tab>
          <Tab label="Volunteering" className="w-full bg-red-600">
            <div>Test</div>
          </Tab>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Resume;
