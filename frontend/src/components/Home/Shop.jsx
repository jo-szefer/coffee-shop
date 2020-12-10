import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShopCategoriesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const ShopCategory = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 auto;
  box-sizing: border-box;
  margin: 5px;
  width: 31vw;
  height: 70vh;
  overflow: hidden;
  background-image: ${({ image }) => `url('${image}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    filter: grayscale(10);
    transition: all 1s ease 0s;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 20vh;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  height: 30%;
  width: 100%;
  color: white;
  background-color: black;
  opacity: 0.7;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.8px;
  font-size: 2vw;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Shop = ({ shopCategories }) => {
  return (
    <ShopCategoriesContainer>
      {shopCategories
        ? shopCategories.map((category) => (
            <ShopCategory image={category.image}>
              <StyledLink to={category.linkTo}>
                {category.linkDescription}
              </StyledLink>
            </ShopCategory>
          ))
        : null}
    </ShopCategoriesContainer>
  );
};
