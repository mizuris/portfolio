import React from "react";
import * as AiIcons from "react-icons/ai";
import { LinksList } from "./SocialMediaLinks.styled";

function SocialMediaLinks() {
  return (
    <LinksList>
      <li>
        <a target="_blank" rel="noopener" href="#!">
          <AiIcons.AiFillGithub />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener" href="#!">
          <AiIcons.AiFillFacebook />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener" href="#!">
          <AiIcons.AiFillLinkedin />
        </a>
      </li>
    </LinksList>
  );
}

export default SocialMediaLinks;
