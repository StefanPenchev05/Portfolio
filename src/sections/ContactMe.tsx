import { useState } from "react";
import MainLayout from "../components/MainLayout";
import Reveal from "../Animations/Reveal";
import IconButton from "../components/IconButton";

import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

import ContactMeImg from "../assets/ContactMeImg.webp";
import TextField from "../components/TextField";

const ContactMe = () => {
  const [nameFieldText, setFieldText] = useState<string>("");
  const [phoneFieldText, setPhoneFieldText] = useState<string>("");
  const [emailFieldText, setEmailFieldText] = useState<string>("");
  const [subjetText, setSubjectText] = useState<string>("");
  const [messageFieldText, setMessageFieldText] = useState<string>("");

  const contactSocialMediaLinks = [
    {
      component: <TbBrandFacebook className="text-light-text w-1/2 h-1/2" />,
      link: "https://www.facebook.com/stefcho.penchev/",
    },
    {
      component: <TbBrandInstagram className="text-light-text w-1/2 h-1/2" />,
      link: "https://www.instagram.com/_stefan.penchev_/",
    },
    {
      component: <TbBrandLinkedin className="text-light-text w-1/2 h-1/2" />,
      link: "https://www.linkedin.com/in/stefan-penchev-31b94a318",
    },
  ];

  const emailSendingFieldsTop = [
    {
      title: "Your Name",
      fieldType: "string",
      text: nameFieldText,
      setText: (newString: string) => setFieldText(newString),
      fullWidth: false,
    },
    {
      title: "Phone Number",
      fieldType: "tel",
      text: phoneFieldText,
      setText: (newString: string) => setPhoneFieldText(newString),
      fullWidth: false,
    },
  ];

  const emailSendingFieldsBottom = [
    {
      title: "Email",
      fieldType: "email",
      text: emailFieldText,
      setText: (newString: string) => setEmailFieldText(newString),
      fullWidth: true,
    },
    {
      title: "Subject",
      fieldType: "string",
      text: subjetText,
      setText: (newString: string) => setSubjectText(newString),
      fullWidth: true,
    },
    {
      title: "Your message",
      fieldType: "string",
      text: messageFieldText,
      setText: (newString: string) => setMessageFieldText(newString),
      textArea: true,
      fullWidth: true,
    },
  ];

  return (
    <MainLayout>
      <div className="w-full md:w-4/5 space-y-12 px-4 md:px-0">
        <Reveal width="100%">
          <div className="text-center font-secondary w-full">
            <div className="uppercase text-primary-red space-x-2 mb-4">
              <span>Conatact</span>
            </div>
            <b className="text-3xl md:text-6xl text-light-text mb-4">
              Contact With Me
            </b>
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="space-y-10 bg-gradient-to-br from-[#1e2024] to-[#23272b] shadow-button rounded-2xl w-full md:w-1/3 h-full p-4 md:p-8 md:mr-12">
            <img
              src={ContactMeImg}
              alt="Contact Me"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
            <div className="space-y-6">
              <b className="text-2xl md:text-3xl text-light-text mb-4">
                Stefan Penchev
              </b>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                MERN Full Stack Developer
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Phone: <span className="text-white">+359 88 7915 900</span>
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Email:{" "}
                <span className="text-white">penchev.stefan@icloud.com</span>
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-sm md:text-base uppercase text-gray-400 mb-4">
                Find with me
              </p>
              <div className="flex space-x-4">
                {contactSocialMediaLinks.map((el, index) => (
                  <IconButton
                    key={index}
                    className="w-12 h-12 md:w-14 md:h-14"
                    link={el.link}
                  >
                    {el.component}
                  </IconButton>
                ))}
              </div>
            </div>
          </div>
                  <div className="flex flex-wrap space-y-8 bg-gradient-to-br from-[#1e2024] to-[#23272b] shadow-button rounded-2xl flex-grow h-full p-6 md:p-11">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 w-full">
            {emailSendingFieldsTop.map((el, index) => (
              <TextField
                key={index}
                title={el.title}
                fieldType={el.fieldType}
                text={el.text}
                setText={el.setText}
                fullWidth={el.fullWidth}
              />
            ))}
          </div>
          <div className="w-full space-y-8">
            {emailSendingFieldsBottom.map((el, index) => (
              <TextField
                key={index}
                title={el.title}
                fieldType={el.fieldType}
                text={el.text}
                setText={el.setText}
                textArea={el.textArea}
                fullWidth={el.fullWidth}
              />
            ))}
          </div>
          <button className="w-full h-14 uppercase bg-primary-red rounded-md text-light-text font-secondary text-lg shadow-button hover:bg-hover-red transition duration-300 ease-in-out">
            Send Message
          </button>
        </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactMe;
