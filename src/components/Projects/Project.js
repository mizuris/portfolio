import React from "react";
import { Button } from "../Styled/styled";
import {
  Description,
  Name,
  ProjectAnchor,
  ProjectContent,
  StyledProject,
} from "./Projects.styled";

function Project({ project }) {
  const { name, shortDescription, image } = project;
  return (
    <StyledProject>
      <ProjectAnchor href="#!" image={image}>
        <ProjectContent>
          <Name>{name}</Name>
          <Description>{shortDescription}</Description>
          <Button>Read more</Button>
          <Button>Live Version</Button>
        </ProjectContent>
      </ProjectAnchor>
    </StyledProject>
  );
}

export default Project;
