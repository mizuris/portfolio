import React from "react";
import { ButtonBase } from "./IconButton.styled";

function IconButton({ text, icon, onClick }) {
  return (
    <ButtonBase onClick={onClick}>
      {text && <span>{text}</span>}
      {icon && icon}
    </ButtonBase>
  );
}

export default IconButton;
