import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
