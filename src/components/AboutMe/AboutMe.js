import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Heading,
  Photo,
  SkillsList,
  StyledAboutMe,
  Text,
} from "./AboutMe.styled";
import { Button, Wrapper } from "../Styled/styled";
import { HTMLContent } from "../HTMLContent/HTMLContent";
import person from "../../assets/images/person.jpg";
import pl_resume from "../../assets/pl-cv.pdf";
import en_resume from "../../assets/en-cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import i18next from "i18next";

function AboutMe() {
  const { t } = useTranslation();
  const [resumeFile, setResumeFile] = useState(en_resume);

  useEffect(() => {
    setResumeFile(i18next.language === "en" ? en_resume : pl_resume);
  }, [i18next.language]);

  const skillsItemsList = [
    "JavaScript - ES6+",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS/SASS",
    "GIT",
    "REST API",
    "React",
    "Redux",
    "Angular",
    "Next.js",
    "Node.js",
    "Express",
    "Nest.js",
    "AWS",
    "Serverless",
  ];

  return (
    <StyledAboutMe>
      <Wrapper>
        <Heading data-aos="fade-up">{t("about-me:heading")}</Heading>
        <Text>
          <p data-aos="fade-up">
            <HTMLContent>{t("about-me:text1")}</HTMLContent>
          </p>
          <p data-aos="fade-up">
            <HTMLContent>{t("about-me:text2")}</HTMLContent>
          </p>
          <p data-aos="fade-up">
            <HTMLContent>{t("about-me:text3")}</HTMLContent>
          </p>
          <p data-aos="fade-up">{t("about-me:technologies-familiarity")}</p>
        </Text>
        <SkillsList>
          {skillsItemsList.map((item) => (
            <li key={item} data-aos="fade-up">
              {item}
            </li>
          ))}
        </SkillsList>
        <a download="Piotr_Bator_CV" href={resumeFile}>
          <Button
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <AiOutlineDownload /> {t("about-me:resume")}
          </Button>
        </a>
      </Wrapper>
      <Container>
        <Photo data-aos="fade-left" data-aos-delay="300">
          <img src={person} alt="person" />
          <span>{t("about-me:person-photo-text")}</span>
        </Photo>
      </Container>
    </StyledAboutMe>
  );
}

export default AboutMe;
