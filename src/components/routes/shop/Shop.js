import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/CategoriesPreview";
import Category from "../../category/Category";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import { setCategories } from "../../../store/category/category.action";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
