import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/CategoriesPreview";
import "./shop.styles.scss";
function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
}

export default Shop;
