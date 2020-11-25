import React from "react";

import {
  ProductWrapper,
  BtnAdd,
  ProductImage,
  Description,
} from "./shopStyles";

export const ShopItem = ({ name, price, imgName }) => {
  const imgUrl = `images/${imgName}`;
  return (
    <ProductWrapper>
      <BtnAdd>add to cart</BtnAdd>
      <ProductImage src={imgUrl} alt="" />
      <Description>{name}</Description>
      <Description>{price}</Description>
    </ProductWrapper>
  );
};
