import React from "react";
import {
  Description,
  Name,
  ProjectContainer,
  ProjectContent,
  ProjectImage,
} from "./Projects.styled";
import IconButton from "../IconButton/IconButton";
import { BiLinkExternal } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Project({ project, openDrawerById }) {
  const { t } = useTranslation();
  const { id, name, image, trans } = project;

  return (
    <ProjectContainer data-number={id}>
      <ProjectContent data-aos="zoom-in">
        <Name onClick={() => openDrawerById(id)}>{name}</Name>
        <Description>{t(`projects:${trans}:short-description`)}</Description>
        <IconButton
          onClick={() => openDrawerById(id)}
          text="Read more"
          icon={<BiLinkExternal />}
        />
      </ProjectContent>
      <ProjectImage data-aos="zoom-in" onClick={() => openDrawerById(id)}>
        <img src={image} alt={`${name} screenshot`} />
      </ProjectImage>
    </ProjectContainer>
  );
}

export default Project;
