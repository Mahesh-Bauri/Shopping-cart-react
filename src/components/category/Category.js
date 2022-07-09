import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsCard from "../product-card/ProductsCard";
import { CategoryTitle, CategoryContainer } from "./category.styles.js";
import { selectCategoriesMap } from "../../store/category/category.selector";

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductsCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;
