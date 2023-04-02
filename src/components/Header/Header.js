import React from "react";
import IconButton from "../IconButton/IconButton";
import { StyledHeader, Wrapper, Welcome, Introduction } from "./Header.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <StyledHeader name="header">
      <Wrapper as="header">
        <Welcome>{t("header:welcome")}</Welcome>

        <Introduction>
          <h1>{t("header:name")}</h1>
          <h2>{t("header:role")}</h2>
        </Introduction>
        <Link to="about" smooth={true}>
          <IconButton text={t("header:next-section")} icon={<FiArrowRight />} />
        </Link>
      </Wrapper>
      <SocialMediaLinks />
      <ParticlesBackground />
    </StyledHeader>
  );
}

export default Header;
