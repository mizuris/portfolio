import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SocialMediaLinks from "./components/SocialMediaLinks/SocialMediaLinks";
import { Section } from "./components/Section/Section.styled";

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
        <SocialMediaLinks />
      </Section>
    </StyledApp>
  );
}

export default App;
