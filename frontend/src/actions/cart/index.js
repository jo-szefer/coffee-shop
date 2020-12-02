export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const addToCart = (item) => {
  return { type: ADD_TO_CART, item };
};

export const removeFromCart = (name) => {
  return { type: REMOVE_FROM_CART, name };
};

export const changeQuantity = (name, quantity) => {
  return { type: CHANGE_QUANTITY, name, quantity };
};
