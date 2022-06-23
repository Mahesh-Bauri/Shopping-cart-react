import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/CheckoutItem";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className="total">{`Total : $${cartTotal}`} </span>
    </div>
  );
}

export default Checkout;