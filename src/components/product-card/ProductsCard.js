import Button from "../button/Button";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

function ProductsCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemtoCart } = useContext(CartContext);

  const addProductToCart = () => addItemtoCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductsCard;
