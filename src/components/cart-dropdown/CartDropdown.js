import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.js";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartProvider";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.js";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    return navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((cartItem) => {
          console.log(cartItem.id);
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </CartItems>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
