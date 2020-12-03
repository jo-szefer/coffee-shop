import React from "react";
import { connect } from "react-redux";
import {
  ProductWrapper,
  BtnAdd,
  ProductImage,
  Description,
} from "./shopStyles";
import { addToCart } from "../../actions/cart";

const _ShopItem = ({ name, price, imgName, addToCart }) => {
  const imgUrl = `images/${imgName}`;
  return (
    <ProductWrapper>
      <BtnAdd onClick={() => addToCart({ name, price, imgName, quantity: 1 })}>
        add to cart
      </BtnAdd>
      <ProductImage src={imgUrl} alt="" />
      <Description>{name}</Description>
      <Description>{price}</Description>
    </ProductWrapper>
  );
};
const mapDispatchToProps = (dispatch) => {
  return { addToCart: (item) => dispatch(addToCart(item)) };
};
export const ShopItem = connect(null, mapDispatchToProps)(_ShopItem);
