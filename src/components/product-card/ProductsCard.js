import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import Skeleton from "react-loading-skeleton";
import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from "./product-card.styles.js";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function ProductsCard({ product }) {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const { name, imageUrl, price } = product;
	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	});

	return (
		<ProductCardContainer>
			{loading ? (
				<Skeleton height={177} width={600} />
			) : (
				<img src={imageUrl} alt={name} />
			)}
			<Footer>
				{loading ? <Skeleton height={20} width={120} /> : <Name>{name}</Name>}
				{loading ? (
					<Skeleton height={20} width={80} />
				) : (
					<Price>{"$" + price}</Price>
				)}
			</Footer>
			<Button
				onClick={addProductToCart}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
}

export default ProductsCard;
