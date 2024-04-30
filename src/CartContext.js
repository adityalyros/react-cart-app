// CartContext.js
import React, { createContext, useReducer } from 'react';

const initialState = [];

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].amount++;
        return updatedCart;
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'INCREMENT_ITEM':
      return state.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    case 'DECREMENT_ITEM':
      return state.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
