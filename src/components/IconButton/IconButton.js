import React from "react";
import { ButtonBase } from "./IconButton.styled";

function IconButton({ text, icon }) {
  return (
    <ButtonBase>
      <span>{text}</span>
      {icon}
    </ButtonBase>
  );
}

export default IconButton;
