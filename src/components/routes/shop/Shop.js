import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesProvider";
import ProductsCard from "../../product-card/ProductsCard";
import "./shop.styles.scss";
function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2 className="title">{title}</h2>

            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ProductsCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Shop;
