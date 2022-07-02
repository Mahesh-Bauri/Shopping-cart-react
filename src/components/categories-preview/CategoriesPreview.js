import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesProvider";
import CategoryPreview from "../category-preview/CategoryPreview";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
