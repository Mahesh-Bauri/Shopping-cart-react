import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import "./checkout.styles.scss";

function CheckoutItem({ cartItem }) {
  const { increaseCount, decreaseCount, removeCartItem } =
    useContext(CartContext);
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <div className="input-container">
        <span>{name}</span>
        <div className="btn-container">
          <button onClick={() => decreaseCount(cartItem)}>{"<"}</button>
          <span>{quantity}</span>
          <button onClick={() => increaseCount(cartItem)}>{">"}</button>
        </div>
        <span>{price}</span>
        <button onClick={() => removeCartItem(cartItem)}>X</button>
      </div>
    </div>
  );
}

function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
    </div>
  );
}

export default Checkout;
