import React, { useEffect } from "react";
import {
  Container,
  Heading,
  Photo,
  SkillsList,
  StyledAboutMe,
  Text,
  Note,
} from "./AboutMe.styled";
import { Button, Wrapper } from "../Styled/styled";
import person from "../../assets/images/person.jpg";
import AOS from "aos";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledAboutMe>
      <Wrapper>
        <Heading data-aos="fade-up">A few words</Heading>
        <Text>
          <p data-aos="fade-up">
            Hello! I'm Piotr Bątor - <em>Junior Frontend Developer</em> and
            Graphics Designer located in Poland. I am graduate of postgraduate
            school with a frontend profile. I started my adventure with web
            development <em>2&nbsp;years ago.</em>
          </p>
          <p data-aos="fade-up">
            I've been creating <em>aesthetic</em> and <em>tidy designs</em> for
            past <em>4&nbsp;years</em>. My career as developer started a year
            ago, since then I managed to finish a couple of{" "}
            <em>freelance projects.</em> All of my websites and apps are fully{" "}
            <em>responsive.</em>
          </p>
          <p data-aos="fade-up">
            Some <em>technologies</em> that I'm familiar to:
          </p>
        </Text>
        <SkillsList>
          <li data-aos="fade-up">HTML</li>
          <li data-aos="fade-up">JavaScript - ES6+</li>
          <li data-aos="fade-up">CSS</li>
          <li data-aos="fade-up">TypeScript</li>
          <li data-aos="fade-up">SCSS/SASS</li>
          <li data-aos="fade-up">React</li>
          <li data-aos="fade-up">Bootstrap</li>
          <li data-aos="fade-up">Node.js*</li>
          <li data-aos="fade-up">Next.js</li>
          <li data-aos="fade-up">Redux</li>
          <li data-aos="fade-up">Express*</li>
          <li data-aos="fade-up">Angular*</li>
        </SkillsList>
        <Note data-aos="fade-up">* - BASIC KNOWLEDGE OR RARELY USED</Note>
        <Button
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          Download resume
        </Button>
      </Wrapper>
      <Container>
        <Photo data-aos="fade-left" data-aos-delay="300">
          <img src={person} alt="person" />
          <span>Yep... It's me! 🙋‍♂️</span>
        </Photo>
      </Container>
    </StyledAboutMe>
  );
}

export default AboutMe;
