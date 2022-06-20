import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartProvider";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} />;
        })}
      </div>
      <Link to="/checkout">
        <Button>Go to checkout</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
