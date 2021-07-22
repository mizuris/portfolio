import React from "react";
import {
  Description,
  Name,
  ProjectContainer,
  ProjectContent,
  ProjectImage,
  OpenIcon,
} from "./Projects.styled";
import { BiLinkExternal } from "react-icons/bi";

function Project({ project }) {
  const { name, shortDescription, image, technologies } = project;
  return (
    <ProjectContainer>
      <ProjectContent>
        <Name>{name}</Name>
        <Description>{shortDescription}</Description>
      </ProjectContent>
      <OpenIcon>
        <BiLinkExternal />
      </OpenIcon>
      <ProjectImage>
        <a href="#!">
          <img src={image} alt="" />
        </a>
      </ProjectImage>
    </ProjectContainer>
  );
}

export default Project;
