import React from "react";
import { StyledLogo } from "./Logo.styled";
import logo from "../../assets/logo/logo.svg";

function Logo(props) {
  return (
    <StyledLogo href="#!">
      <object data={logo} type="image/svg+xml" aria-label="logo" />
      {props.withText && (
        <div>
          <h1>
            Piotr <span>Bątor</span>
          </h1>
          <h6>Jr. Frontend Developer</h6>
        </div>
      )}
    </StyledLogo>
  );
}

export default Logo;
