import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Arrow,
  Price,
  RemoveButton,
} from "./checkout-item.styles.js";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price> {price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
