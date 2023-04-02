import React from "react";
import {
  StyledDrawer,
  DrawerContent,
  Back,
  BackButton,
  BackAnchor,
  Title,
  ShortDescription,
  LongDescription,
  TextDivider,
  Links,
  Technologies,
  Technology,
  DrawerOverlay,
} from "./Drawer.styled";
import DrawerImages from "./DrawerImages";
import { HTMLContent } from "../HTMLContent/HTMLContent";
import { FiArrowLeftCircle, FiGithub, FiLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Drawer({ open, setOpen, project }) {
  const { t } = useTranslation();
  const { technologies, liveVersion, repository, screenshots, trans } = project;

  return (
    <>
      <DrawerOverlay open={open} onClick={() => setOpen(false)} />
      <StyledDrawer open={open}>
        <DrawerContent>
          <Back>
            <BackButton onClick={() => setOpen(false)}>
              <FiArrowLeftCircle />
            </BackButton>
            <BackAnchor onClick={() => setOpen(false)}>
              {t("shared:back")}
            </BackAnchor>
          </Back>

          <TextDivider>{t("projects:shared:title")}</TextDivider>
          <Title>{t(`projects:${trans}:name`)}</Title>
          <DrawerImages screenshots={screenshots} />

          <TextDivider>{t("projects:shared:overview")}</TextDivider>
          <ShortDescription>
            {t(`projects:${trans}:short-description`)}
          </ShortDescription>

          <TextDivider>{t("projects:shared:about")}</TextDivider>
          <LongDescription>
            <HTMLContent>
              {t(`projects:${trans}:detailed-description`)}
            </HTMLContent>
          </LongDescription>

          <TextDivider>{t("projects:shared:technologies")}</TextDivider>
          <Technologies>
            {technologies.map((item, index) => {
              return <Technology key={`${item}${index}`}>{item}</Technology>;
            })}
          </Technologies>

          <Links>
            <div>
              <TextDivider>{t("projects:shared:title")}</TextDivider>
              <a target="_blank" rel="noreferrer" href={repository}>
                <FiGithub />
              </a>
            </div>
            <div>
              <TextDivider>{t("projects:shared:live-version")}</TextDivider>
              <a target="_blank" rel="noreferrer" href={liveVersion}>
                <FiLink />
              </a>
            </div>
          </Links>
        </DrawerContent>
      </StyledDrawer>
    </>
  );
}

export default Drawer;
