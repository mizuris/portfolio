import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import { Section } from "./components/Section/Section.styled";
import Navbar from "./components/Navbar/Navbar";

const StyledApp = styled.main`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Section flex between>
        <Hero />
      </Section>
    </StyledApp>
  );
}

export default App;
