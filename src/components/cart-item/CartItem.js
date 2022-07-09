import React from "react";
import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item.styles.js";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{`${quantity} x ${"$" + price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
