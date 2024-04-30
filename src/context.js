// src/context.js

import React, { createContext, useReducer } from "react";
import cartItems from "./data";

export const CartContext = createContext();

const initialState = {
  cart: cartItems,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    // Implement your reducer actions here
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
