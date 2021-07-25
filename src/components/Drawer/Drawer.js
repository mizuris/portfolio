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
import DrawerCarousell from "./DrawerCarousell";
import { FiArrowLeftCircle, FiGithub, FiLink } from "react-icons/fi";

function Drawer({ open, setOpen, project }) {
  const {
    name,
    shortDescription,
    detailedDescription,
    technologies,
    liveVersion,
    repository,
    screenshots,
  } = project;

  return (
    <>
      <DrawerOverlay open={open} onClick={() => setOpen(false)} />
      <StyledDrawer open={open}>
        <DrawerContent>
          <Back>
            <BackButton onClick={() => setOpen(false)}>
              <FiArrowLeftCircle />
            </BackButton>
            <BackAnchor onClick={() => setOpen(false)}>Back</BackAnchor>
          </Back>

          <TextDivider>Title</TextDivider>
          <Title>{name}</Title>
          <DrawerCarousell
            screenshots={screenshots}
            liveVersion={liveVersion}
          />

          <TextDivider>Overview</TextDivider>
          <ShortDescription>{shortDescription}</ShortDescription>

          <TextDivider>About</TextDivider>
          <LongDescription>{detailedDescription}</LongDescription>

          <TextDivider>Technologies</TextDivider>
          <Technologies>
            {technologies.map((item, index) => {
              return <Technology key={`${item}${index}`}>{item}</Technology>;
            })}
          </Technologies>

          <Links>
            <div>
              <TextDivider>Repository</TextDivider>
              <a target="_blank" rel="noreferrer" href={repository}>
                <FiGithub />
              </a>
            </div>
            <div>
              <TextDivider>Live version</TextDivider>
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
