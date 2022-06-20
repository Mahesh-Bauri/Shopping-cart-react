import React, { useState } from "react";
import { createContext } from "react";
import DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(DATA);
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
