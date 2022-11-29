import React, { Fragment } from "react";
import CategoryPreview from "../category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import Spinner from "../spinner/Spinner";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
}

export default CategoriesPreview;
