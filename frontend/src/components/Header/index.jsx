import React from "react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = (props) => {
  return (
    <>
      <Navigation handleOpenCart={props.handleOpenCart} />
      <Logo />
    </>
  );
};
