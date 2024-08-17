import MainLayout from "../components/MainLayout";
import EducationCard from "../components/EducationCard";
import Divider from "../components/Divider";
import Reveal from "../Animations/Reveal";

const education = [
  {
    image:
      "https://www.zname.info/pic/posts/2021-02/16140922235226/gals/DSC03780--900.png",
    startYear: "2020",
    endYear: "2024",
    subject: "Mathematics, Informatics and English",
    place: "Konstantin Velichkov Specialized Mathematics High School.",
    location: "Pazardzhik, Bulgaria, San Stefano St 1, 4400",
    admissionLink: "https://mgpz.org",
    description: `PMG "Konstantin Velichkov" in Pazardjik is a specialized high school that focuses on mathematics, informatics, and natural sciences, with a strong emphasis on STEM education. The school also integrates language studies, particularly English, into its curriculum. It has a reputation for producing accomplished graduates who excel in both academic and professional fields`,
    achievements: [
      "37th place out of 102 in the Az Moga Tug I Sega IT competition (2023) ",
      "7th place out of 102 in the Az Moga Tug I Sega IT competition (2024)",
    ],
    modules: [
      "Advanced Mathematics",
      "Advanced Programming",
      "English Literature",
    ],
    instructors: [
      "Mrs. Cvetka Andonova",
      "Mrs. Valya Malinova",
    ],
    testimonials: [
      "This school provided me with a strong foundation in mathematics and programming.",
      "The teachers are very supportive and knowledgeable.",
    ],
    gallery: [
      "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/447634708_7998994906806653_81962522396015303_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=WTf_GkjdwS4Q7kNvgFYVvyY&_nc_ht=scontent.fpdv1-1.fna&oh=00_AYDjBYJ1E3ohRF0d9AORuxDcu0Id8ILLfl77Nu8LY39p6A&oe=66C67613",
      "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/447634258_7998995120139965_6228277740719938495_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=yqH7JncHT-8Q7kNvgHz3NOv&_nc_ht=scontent.fpdv1-1.fna&oh=00_AYAOtN1KKf6CNgWInOL_TdX57WpSFFFZOEIc8xSRwydt8A&oe=66C67E4B",
      "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/447635124_7998994750140002_4599311952679921786_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Rh69O-W9w4cQ7kNvgESWXOU&_nc_ht=scontent.fpdv1-1.fna&oh=00_AYANcD_LeJNV3PUIzWB0fVtOZqrPyd3J9HE94tfRWrlBRw&oe=66C67EA4",
    ],
    contactInfo: "Email: info@mgpz.org, Phone: +359 34 444 555",
  },
  {
    image:
      "https://images.adsttc.com/media/images/562e/b3ea/e58e/ceb4/c400/02f1/slideshow/portada_©Eduard_Hueber_La_Maison_du_Savoir_Belval_LU.jpg?1445901270",
    startYear: "2024",
    endYear: "Current",
    subject: "BSc in Computer Science",
    place: "University of Luxembourg",
    location: "2 Avenue de l'Universite L, 4365 Esch-sur-Alzette",
    admissionLink:
      "https://www.uni.lu/fstm-en/study-programs/bachelor-in-computer-science/",
    description: "A comprehensive bachelor's program in computer science, covering various aspects of software development and computer systems.",
    achievements: [],
    modules: [],
    instructors: [],
    testimonials: [],
    gallery: [],
    contactInfo: "Email: admissions@uni.lu, Phone: +352 46 66 44 5555",
  },
];

const Education = () => {
  return (
    <MainLayout>
      <div className="w-full md:w-4/5 space-y-12 px-4 md:px-0">
        <Reveal width="100%">
          <div className="text-center font-secondary w-full">
              <div className="uppercase text-primary-red space-x-2 mb-4">
                  <span>Secondary</span>
                  <span>And</span>
                  <span>Bachelor</span>
              </div>
            <b className="text-3xl md:text-5xl text-light-text">Education</b>
          </div>
        </Reveal>
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
              description={el.description}
              achievements={el.achievements}
              modules={el.modules}
              instructors={el.instructors}
              testimonials={el.testimonials}
              gallery={el.gallery}
              contactInfo={el.contactInfo}
            />
          ))}
        </div>
        <Divider borderColor="border-black" />
      </div>
    </MainLayout>
  );
};

export default Education;
