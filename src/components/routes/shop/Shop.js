import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesProvider";
import CategoryPreview from "../../category-preview/CategoryPreview";
import "./shop.styles.scss";
function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}

export default Shop;
