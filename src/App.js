import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialVertical from "./components/SocialVertical";
import { Section } from "./styled/Section.styled";

const StyledApp = styled.main`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Section centered>
        <Hero />
        <SocialVertical />
      </Section>
    </StyledApp>
  );
}

export default App;
