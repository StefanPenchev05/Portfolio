import React from "react";
import MainLayout from "../components/MainLayout";
import EducationCard from "../components/EducationCard";

const education = [
    {
        image: "https://www.zname.info/pic/posts/2021-02/16140922235226/gals/DSC03780--900.png",
        startYear: "2020",
        endYear: "2024",
        subject: "Mathematics, Informatics and English",
        place: "Konstantin Velichkov Specialized Mathematics High School.",
        location: "Pazardzhik, Bulgaria, San Stefano St 1, 4400",
        admissionLink: "https://mgpz.org"
    },
    {
        image: "https://images.adsttc.com/media/images/562e/b3ea/e58e/ceb4/c400/02f1/slideshow/portada_©Eduard_Hueber_La_Maison_du_Savoir_Belval_LU.jpg?1445901270",
        startYear: "2024",
        endYear: "Current",
        subject: "BSc in Computer Sience",
        place: "University of Luxembourg",
        location: "2 Avenue de l'Universite L, 4365 Esch-sur-Alzette",
        admissionLink: "https://www.uni.lu/fstm-en/study-programs/bachelor-in-computer-science/"
    }
]

const Education = () => {
  return (
    <MainLayout>
      <div className="w-4/5 space-y-12">
        <div className="text-center font-secondar w-full">
          <div className="uppercase text-primary-red flex justify-center space-x-2 mb-4">
            <span>Secondary</span>
            <span>And</span>
            <span>Bachelor</span>
          </div>
          <b className="text-5xl text-light-text">Education</b>
        </div>
        <div className="flex flex-col space-y-6">
            {education.map((el, index) => (
                <EducationCard
                    key={index}
                    image={el.image}
                    startYear={el.startYear}
                    endYear={el.endYear}
                    subject={el.subject}
                    place={el.place}
                    location={el.location}
                    admissionLink={el.admissionLink}
                />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Education;
