import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesProvider";
import ProductsCard from "../product-card/ProductsCard";
import "./category.styles.scss";
function Category() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(products);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
    </div>
  );
}

export default Category;