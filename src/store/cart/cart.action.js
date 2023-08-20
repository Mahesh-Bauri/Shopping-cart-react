import { CART_ACTION_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { toast } from "react-toastify";

export const setIsCartOpen = (bool) =>
	createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool);

const addCartItem = (cartItems, productToAdd) => {
	const existingItem = cartItems.find((cartItem) => {
		return cartItem.id === productToAdd.id;
	});

	// if item found  then increment
	if (existingItem) {
		return cartItems.map((cartItem) => {
			return cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	} else {
		// return new array with modified cartItems/ new cart Item
		return [{ ...productToAdd, quantity: 1 }, ...cartItems];
	}
};

function removeCartItem(cartItems, productToRemove) {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => {
			return cartItem.id !== productToRemove.id;
		});
	}

	return cartItems.map((cartItem) => {
		return cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
}

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => {
		return cartItem.id !== cartItemToClear.id;
	});
};

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	toast.success("Item Added to Cart", {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1000,
	});
	return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	toast.success("Item Removed from Cart", {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1000,
	});
	return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	toast.success("Item Removed from Cart", {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1000,
	});
	return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
