import React, { createContext, useContext, useState } from 'react'

export const shopContext = createContext(null)

import allProduct from '../assets/all_product'

function ShopState({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size) => {
    setCartItems((prev) => {

      // 🔍 check same product + same size
      const existingItem = prev.find((item) => item.id === product.id && item.size === size);

      // ➕ qty increase
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1, size: size }
            : item
        );
      }

      // 🆕 new product add
      return [
        ...prev,
        {
          ...product, // tumhara pura product object
          size,
          quantity: 1,
        },
      ];
    });
  };


  const increaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const decreaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const removeItem = (id, size) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id && item.size !== size));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0
  );



  return (
    <shopContext.Provider value={{ allProduct, cartItems, increaseQty, decreaseQty, removeItem, subtotal, addToCart }}>
      {children}
    </shopContext.Provider>
  )
}

export default ShopState

export const useShopState = () => useContext(shopContext)
