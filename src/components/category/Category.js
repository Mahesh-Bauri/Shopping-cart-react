import React, { Fragment, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsCard from "../product-card/ProductsCard";
import { CategoryTitle, CategoryContainer } from "./category.styles.js";
import { selectCategoriesMap } from "../../store/category/category.selector";

function Category() {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts", categoriesMap);
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
