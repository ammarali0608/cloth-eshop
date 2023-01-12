import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.util";

import SHOP_DATA from "../../shop-data";
export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
