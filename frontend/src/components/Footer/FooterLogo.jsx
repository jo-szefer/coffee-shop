import React from "react";

import { StyledLogoLink } from "../Header/Logo";
import { LogoH1 } from "../Header/Logo";
import { LogoH3 } from "../Header/Logo";

export const FooterLogo = () => {
  return (
    <StyledLogoLink to="/" color="white" backgroundcolor="none">
      <LogoH1>les grains</LogoH1>
      <LogoH3>coffee roasters</LogoH3>
    </StyledLogoLink>
  );
};
