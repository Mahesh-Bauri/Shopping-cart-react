import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsProvider";
import ProductsCard from "../../product-card/ProductsCard";
import "./shop.styles.scss";
function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductsCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
