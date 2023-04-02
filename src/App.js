import React, { useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import styled from "styled-components";
import { Section } from "./components/Styled/styled";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import i18n from "./i18n";

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

function App() {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    }
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }
    if (loader) {
      document.body.style.overflow = "hidden";
    }
    if (!loader && !menuOpen && !drawerOpen) {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen, drawerOpen, loader]);

  return (
    <I18nextProvider i18n={i18n}>
      <StyledApp>
        <Loader loader={loader} setLoader={setLoader} />
        <Navbar open={menuOpen} setOpen={setMenuOpen} />
        <Header name="header" />
        <Section
          name="about"
          flex
          centered
          data-section={t("section-bg-title:about-me")}
        >
          <AboutMe />
        </Section>
        <Section name="projects" data-section={t("section-bg-title:projects")}>
          <Projects drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Section>
        <Contact name="contact" />
      </StyledApp>
    </I18nextProvider>
  );
}

export default App;
