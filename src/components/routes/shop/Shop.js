import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../../categories-preview/CategoriesPreview";
import Category from "../../category/Category";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { setCategories } from "../../../store/category/category.action";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      // console.log(categoriesArray);
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
