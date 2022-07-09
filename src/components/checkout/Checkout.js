import React from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.js";

import CheckoutItem from "../checkout-item/CheckoutItem";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <Total>{`Total : $${cartTotal}`} </Total>
    </CheckoutContainer>
  );
}

export default Checkout;
