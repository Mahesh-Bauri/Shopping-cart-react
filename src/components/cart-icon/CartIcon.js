import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles.js";

import React from "react";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";

import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";

function CartIcon({ handleShow }) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  function toggle() {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
