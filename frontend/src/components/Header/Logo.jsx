import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  flex-direction: column;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${({ color }) => color || "black"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "white"};
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;
export const LogoH1 = styled.h1`
  text-align: center;
  letter-spacing: 0.7em;
  font-size: 3vw;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 28px;
    letter-spacing: 5px;
  }
`;

export const LogoH3 = styled.h3`
  margin-top: 4px;
  letter-spacing: 0.7em;
  font-size: 1vw;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Logo = () => {
  return (
    <>
      <StyledLogoLink to="/">
        <LogoH1>les grains</LogoH1>
        <LogoH3>coffee roasters</LogoH3>
      </StyledLogoLink>
    </>
  );
};
