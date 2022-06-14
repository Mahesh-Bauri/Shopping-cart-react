import React from "react";
import "./directory.style.scss";
import CategoryItem from "../category-item/CategoryItem";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
}

export default Directory;
