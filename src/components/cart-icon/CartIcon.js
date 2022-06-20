import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

function CartIcon({ handleShow }) {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function toggle() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
}

export default CartIcon;
