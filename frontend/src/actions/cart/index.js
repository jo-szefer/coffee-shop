const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SET_QUANTITY = "SET_QUANTITY";

export const cartActionTypes = {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QUANTITY,
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId,
  };
};

export const setQuantity = (productId, quantity) => {
  return {
    type: SET_QUANTITY,
    productId,
    quantity,
  };
};
