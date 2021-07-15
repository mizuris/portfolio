import React from "react";
import styled from "styled-components";
import { Section } from "./components/Styled/styled";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const StyledApp = styled.main`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Header />
      <Section data-section="About"></Section>
      <Section data-section="Projects"></Section>
      <Section data-section="Skills"></Section>
      <Section data-section="Contact"></Section>
    </StyledApp>
  );
}

export default App;
