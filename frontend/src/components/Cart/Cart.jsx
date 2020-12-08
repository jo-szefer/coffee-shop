import React from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

import { removeFromCart, changeQuantity } from "../../actions/cart";

const CloseButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  color: #71836b;
  background: transparent;
  text-align: center;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;

const ProductsInCart = styled.div`
  min-width: 30vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  max-width: 20%;
  height: 100%;
  background: #fff;
  color: #2c3238;
  max-height: 100%;
  overflow: auto;
  padding: 0 1.25rem;
  max-width: 100%;
`;

const ProductInCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  span {
    text-align: center;
    font-family: Roboto, sans-serif;
    color: #71836b;
  }
`;
const StyledCartImage = styled.img`
  width: 30%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const StyledCartButtons = styled.div`
  display: flex;
  flex-direction: row;
  button {
    outline: none;
    cursor: pointer;
    padding: 5px;
    margin: 5px;
    color: #71836b;
    background: transparent;
    border-style: solid;
    border-color: #71836b;
    border-radius: 0.3rem;
    transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
    text-align: center;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    &:hover {
      background-color: #71836b;
      color: rgb(255, 255, 255);
    }
  }
`;

const CartSummary = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  border-top: solid 2px #71836b;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  color: #71836b;
`;
const EmptyCart = styled.span`
  height: 100%;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  color: #71836b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Cart = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>
        <CloseButton onClick={(e) => props.handleClose(e)}>
          <CloseIcon />
        </CloseButton>
        <ProductsInCart>
          {props.items.length ? (
            props.items.map((productInfo, i) => (
              <>
                <ProductInCart key={i}>
                  <StyledCartImage
                    src={`images/${productInfo.imgName}`}
                    alt=""
                  />
                  <span>{productInfo.name}</span>
                  <span>{productInfo.price}$</span>
                  <span>{productInfo.quantity}</span>
                  <StyledCartButtons>
                    <button
                      onClick={() =>
                        props.changeQuantity(
                          productInfo.name,
                          productInfo.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        props.changeQuantity(
                          productInfo.name,
                          productInfo.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() => props.removeFromCart(productInfo.name)}
                    >
                      Remove from cart
                    </button>
                  </StyledCartButtons>
                </ProductInCart>
                <CartSummary>
                  Total:{" "}
                  {props.items.reduce(
                    (sum, product) => sum + product.price * product.quantity,
                    0
                  )}{" "}
                  $
                </CartSummary>
              </>
            ))
          ) : (
            <EmptyCart>Your cart is empty, add something!!!</EmptyCart>
          )}
        </ProductsInCart>
      </>
    </Modal>
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
