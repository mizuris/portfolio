import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import { Section } from "./components/Section/Section.styled";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";

const StyledApp = styled.main`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Hero />
      <Section>
        <AboutMe />
      </Section>
    </StyledApp>
  );
}

export default App;
