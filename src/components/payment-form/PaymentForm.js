import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  EmptyMessage,
  PaymentHeading,
} from "./payment-form.styles";
import { TestingInfo } from "../checkout/checkout.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/Button";

function PaymentForm() {
  const [isShow, setIsShow] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 79.72 * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    console.log(paymentResult);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  function handleShow() {
    setIsShow((prev) => !prev);
  }

  if (amount === 0)
    return <EmptyMessage>Your shopping cart is empty</EmptyMessage>;

  return (
    <PaymentFormContainer>
      <PaymentHeading>
        <h2>Card Payment </h2>
        <span onClick={handleShow}>
          <BsInfoCircle />
        </span>
      </PaymentHeading>

      {isShow && (
        <TestingInfo>
          India (IN) 4000003560000008 | CVC : Any 3 digits | Date : Any future
          date
        </TestingInfo>
      )}

      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
