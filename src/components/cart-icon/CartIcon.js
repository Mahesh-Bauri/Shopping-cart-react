// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles.js";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

function CartIcon({ handleShow }) {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  function toggle() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
