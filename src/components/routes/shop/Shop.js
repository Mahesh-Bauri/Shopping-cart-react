import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/CategoriesPreview";
import Category from "../../category/Category";
import { fetchCategoriesStartAsync } from "../../../store/category/category.action";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
