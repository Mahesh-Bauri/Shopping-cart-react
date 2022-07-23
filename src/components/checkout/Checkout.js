import React from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Footer,
} from "./checkout.styles.js";

import CheckoutItem from "../checkout-item/CheckoutItem";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/PaymentForm.js";

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
      {cartTotal !== 0 && <Total>{`Total : $${cartTotal}`} </Total>}
      <PaymentForm />

      <Footer>
        Made with <span>❤</span> by <b>Mahesh Bauri</b>
      </Footer>
    </CheckoutContainer>
  );
}

export default Checkout;
