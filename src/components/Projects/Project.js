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

function Project({ project }) {
  const { id, name, shortDescription, image } = project;
  return (
    <ProjectContainer data-number={id}>
      <ProjectContent>
        <Name href="#!">{name}</Name>
        <Description>{shortDescription}</Description>
        <IconButton text="Read more" icon={<BiLinkExternal />} />
      </ProjectContent>
      <ProjectImage href="#!">
        <img src={image} alt={`${name} screenshot`} />
      </ProjectImage>
    </ProjectContainer>
  );
}

export default Project;
