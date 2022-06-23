import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  products: [],
});

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
