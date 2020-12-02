import { ADD_TO_CART, CHANGE_QUANTITY } from "../../actions/cart";
import { REMOVE_FROM_CART } from "../../actions/cart";

const initialState = {
  items: [
    { name: "Guatemala", price: 10, imgName: "blend1.jpg", quantity: 1 },
    { name: "Nicaragua", price: 10, imgName: "blend1.jpg", quantity: 2 },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.item] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.name),
      };
    case CHANGE_QUANTITY:
      if (action.quantity >= 1) {
        return {
          ...state,
          items: changeQuantity(action.name, action.quantity, state.items),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const changeQuantity = (name, quantity, items) => {
  const itemIndex = items.findIndex((item) => name === item.name);
  items[itemIndex].quantity = quantity;
  return [...items];
};
