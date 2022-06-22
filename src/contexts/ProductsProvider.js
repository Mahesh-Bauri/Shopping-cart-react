import React, { useState, useEffect } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
export const ProductsContext = createContext({
  products: [],
});

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
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
