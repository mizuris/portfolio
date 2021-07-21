import React from "react";
import {
  Container,
  Heading,
  Photo,
  SkillsList,
  StyledAboutMe,
  Text,
} from "./AboutMe.styled";
import { Wrapper } from "../Styled/styled";
import person from "../../assets/images/person.jpg";

function AboutMe() {
  return (
    <StyledAboutMe>
      <Wrapper>
        <Heading>A few words</Heading>
        <Text>
          <p>
            Hello! I'm Piotr Bątor - <em>Junior Frontend Developer</em> and
            Graphics Designer located in Poland. I am graduate of postgraduate
            school with a frontend profile. I started my adventure with web
            development <em>2&nbsp;years ago.</em>
          </p>
          <p>
            I've been creating <em>aesthetic</em> and <em>tidy designs</em> for
            past <em>4&nbsp;years</em>. My career as developer started a year
            ago, since then i managed to finish a couple of{" "}
            <em>freelance projects.</em> All of my websites and apps are fully{" "}
            <em>responsive.</em>
          </p>
          <p>
            Some <em>technologies</em> that i'm familiar to:
          </p>
        </Text>
        <SkillsList>
          <li>HTML</li>
          <li>JavaScript - ES6+</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>SCSS/SASS</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Redux</li>
        </SkillsList>
      </Wrapper>
      <Container>
        <Photo>
          <img src={person} alt="person" />
          <span>Yep... It's me! 🙋‍♂️</span>
        </Photo>
      </Container>
    </StyledAboutMe>
  );
}

export default AboutMe;
