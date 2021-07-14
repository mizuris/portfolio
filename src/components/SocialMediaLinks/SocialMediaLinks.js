import React from "react";
import * as AiIcons from "react-icons/ai";

function SocialMediaLinks() {
  return (
    <>
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
    </>
  );
}

export default SocialMediaLinks;
