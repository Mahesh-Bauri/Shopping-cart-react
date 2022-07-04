import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

function ProductsCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
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
