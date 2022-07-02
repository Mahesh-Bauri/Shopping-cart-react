import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categoriesMap: {},
});

function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    console.log(categoriesMap);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
    setCategoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
