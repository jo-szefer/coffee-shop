import React from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";

import "./cart-styles.css";
import { removeFromCart, setQuantity } from "../../actions/cart";

const _Cart = (props) => {
  const [quantityList, setQuantityList] = React.useState([]);

  const handleQuantityChange = (e) => {};

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="productsInCart">
          <h4>Koszyk</h4>
          {props.productList.map((productInfo, i) => (
            <div className="productInCart" key={i}>
              <img src={productInfo.src} alt="" />
              <span>{productInfo.name}</span>
              <span>{productInfo.price}$</span>
              <span>{productInfo.quantity}</span>

              <input
                onChange={handleQuantityChange}
                type="number"
                min="0"
              ></input>
              <button onClick={() => props.setQuantity(productInfo.productId)}>
                Set Quantity
              </button>
              <button
                onClick={() => props.removeItemFromCart(productInfo.productId)}
              >
                Remove from cart
              </button>
            </div>
          ))}
          <div className="cartSummary">
            Total price:{" "}
            {props.productList.reduce(
              (sum, product) => sum + product.price * product.quantity,
              0
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.cart.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (productId) => dispatch(removeFromCart(productId)),
    setQuantity: (productId, quantity) =>
      dispatch(setQuantity(productId, quantity)),
  };
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);
