import React from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";

import "./cart-styles.css";
import { removeFromCart, addToCart, changeQuantity } from "../../actions/cart";

const _Cart = (props) => {
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
          {props.items.map((productInfo, i) => (
            <div className="productInCart" key={i}>
              <img src={`images/${productInfo.imgName}`} alt="" />
              <span>{productInfo.name}</span>
              <span>{productInfo.price}$</span>
              <span>{productInfo.quantity}</span>
              <button
                onClick={() =>
                  props.changeQuantity(
                    productInfo.name,
                    productInfo.quantity + 1
                  )
                }
              >
                Add
              </button>
              <button
                onClick={() =>
                  props.changeQuantity(
                    productInfo.name,
                    productInfo.quantity - 1
                  )
                }
              >
                Remove
              </button>
              <button onClick={() => props.removeFromCart(productInfo.name)}>
                Remove from cart
              </button>
            </div>
          ))}
          <div className="cartSummary">
            Total price:{" "}
            {props.items.reduce(
              (sum, product) => sum + product.price * product.quantity,
              0
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({ items: state.cart.items });
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (name) => dispatch(removeFromCart(name)),
    changeQuantity: (name, quantity) =>
      dispatch(changeQuantity(name, quantity)),
  };
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);
