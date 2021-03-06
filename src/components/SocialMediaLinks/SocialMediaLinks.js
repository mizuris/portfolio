import React from "react";
import * as AiIcons from "react-icons/ai";
import { LinksList } from "./SocialMediaLinks.styled";

function SocialMediaLinks() {
  return (
    <LinksList>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/mizuris/">
          <AiIcons.AiFillGithub />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/piotr.bator.33/"
        >
          <AiIcons.AiFillFacebook />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="www.linkedin.com/in/piotr-bątor"
        >
          <AiIcons.AiFillLinkedin />
        </a>
      </li>
    </LinksList>
  );
}

export default SocialMediaLinks;
