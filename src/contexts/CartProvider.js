import React, { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains
  // if item not found then return undefined
  const existingItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // if item found  then increment
  if (existingItem) {
    /*  method 1 */
    existingItem.quantity = existingItem.quantity + 1;
    const newCart = cartItems.filter((item) => {
      return item.id !== productToAdd.id;
    });
    return [existingItem, ...newCart];

    /* method 2 */

    // return cartItems.map((cartItem) => {
    //   return cartItem.id === productToAdd.id
    //     ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //     : cartItem;
    // });
  } else {
    // return new array with modified cartItems/ new cart Item
    return [{ ...productToAdd, quantity: 1 }, ...cartItems];
  }
};

function removeItem(cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

function decrease(cartItems, productToDec) {
  if (productToDec.quantity === 1) {
    return removeItem(cartItems, productToDec);
  }

  const newCart = cartItems.map((cartItem) => {
    return cartItem.id === productToDec.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
  return newCart;
}

function increase(cartItems, productToInc) {
  const newCart = cartItems.map((cartItem) => {
    return cartItem.id === productToInc.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem;
  });
  return newCart;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  cartCount: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
  removeCartItem: () => {},
});

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseCount = (productToDec) =>
    setCartItems(decrease(cartItems, productToDec));
  const increaseCount = (productToInc) =>
    setCartItems(increase(cartItems, productToInc));

  const removeCartItem = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemtoCart,
    cartItems,
    cartCount,
    decreaseCount,
    increaseCount,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
