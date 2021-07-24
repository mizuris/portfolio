import React, { useEffect } from "react";
import {
  Description,
  Name,
  ProjectContainer,
  ProjectContent,
  ProjectImage,
} from "./Projects.styled";
import IconButton from "../IconButton/IconButton";
import { BiLinkExternal } from "react-icons/bi";
import AOS from "aos";

function Project({ project, openDrawerById }) {
  const { id, name, shortDescription, image } = project;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ProjectContainer data-number={id}>
      <ProjectContent data-aos="zoom-in">
        <Name onClick={() => openDrawerById(id)}>{name}</Name>
        <Description>{shortDescription}</Description>
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
