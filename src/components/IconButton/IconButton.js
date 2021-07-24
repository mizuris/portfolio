import React from "react";
import { ButtonBase } from "./IconButton.styled";

function IconButton({ text, icon, onClick, ...rest }) {
  return (
    <ButtonBase {...rest} onClick={onClick}>
      {text && <span>{text}</span>}
      {icon && icon}
    </ButtonBase>
  );
}

export default IconButton;
