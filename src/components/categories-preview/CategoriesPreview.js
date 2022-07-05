import React, { Fragment } from "react";
import CategoryPreview from "../category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
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
