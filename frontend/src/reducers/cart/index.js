import { cartActionTypes } from "../../actions/cart";

const initialState = {
  productList: [
    {
      productId: "item1",
      src: "images/blend1.jpg",
      price: 10,
      name: "Guatemala",
      quantity: 0,
    },
    {
      productId: "item2",
      src: "images/blend1.jpg",
      price: 15.5,
      name: "Guatemala2",
      quantity: 0,
    },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        productList: [...state.productList, action.product],
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.productId !== action.productId
        ),
      };

    case cartActionTypes.SET_QUANTITY:
      const newList = [...state.productList];
      const index = newList.findIndex(
        (product) => product.productId === action.productId
      );
      newList[index].quantity = action.quantity;
      return {
        ...state,
        productList: newList,
      };

    default:
      return state;
  }
};
