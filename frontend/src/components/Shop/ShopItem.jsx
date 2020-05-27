import React from "react";

export const ShopItem = ({ name, price, imgName }) => {
  const imgUrl = `images/${imgName}`;
  return (
    <div>
      <button className="btnAdd">add to cart</button>
      <img src={imgUrl} alt="" />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};
