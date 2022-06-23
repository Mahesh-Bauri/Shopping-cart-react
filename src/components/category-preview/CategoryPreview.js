import React from "react";
import ProductsCard from "../product-card/ProductsCard";
import "./category-preview.styles.scss";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductsCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default CategoryPreview;
