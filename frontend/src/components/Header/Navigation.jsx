import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const ContactBar = styled.div`
  background-color: #71836b;
  padding: 25px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  overflow: hidden;
  position: sticky;
  z-index: 3;
  top: 0;
  background-color: white;
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  display: block;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.8vw;
  background-color: white;
  border: none;
  text-decoration: none;
  letter-spacing: 0.025em;
  font-family: "Playfair Display", serif;
  background-image: linear-gradient(black, black);
  background-size: 0 1px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-size: 100% 1px, auto;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    padding-top: 10px;
  }
  @media screen and (max-width: 800px) {
    font-size: 18px;
    padding-top: 10px;
  }
`;

const ShoppingCartButton = styled.button`
  font-size: 50px;
`;

export const Navigation = (props) => {
  return (
    <>
      <ContactBar />
      <HeaderContainer>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/signin">Sign in</StyledLink>
        {/* <ShoppingCartButton onClick={props.handleOpenCart}>
          <ShoppingCartIcon />
        </ShoppingCartButton> */}
      </HeaderContainer>
    </>
  );
};
