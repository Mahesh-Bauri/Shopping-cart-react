import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.js";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

function CartDropdown() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckout = () => {
    dispatch(setIsCartOpen(false));
    return navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
