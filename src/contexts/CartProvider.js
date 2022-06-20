import React, { createContext, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
});

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemtoCart,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
