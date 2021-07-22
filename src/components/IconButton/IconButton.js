import React from "react";
import { ButtonBase } from "./IconButton.styled";

function IconButton({ text, icon }) {
  return (
    <ButtonBase>
      {text && <span>{text}</span>}
      {icon && icon}
    </ButtonBase>
  );
}

export default IconButton;
