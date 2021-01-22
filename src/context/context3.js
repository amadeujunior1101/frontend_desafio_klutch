import React, { createContext, useState, useContext, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  
  const store = {
    product,
  };

  return (
    // <ProductContext.Provider value={{ dataProduct, comp, count, setCount, addCount, store }}>
    <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  const {
    product,
  } = context;
  return {
    product,
  };
}