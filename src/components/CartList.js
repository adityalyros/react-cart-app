// src/components/CartList.js

import React, { useContext } from "react";
import { CartContext } from "../context";
import CartItem from "./CartItem";

const CartList = () => {
  const { state } = useContext(CartContext);
  const { cart } = state;

  return (
    <div id="cart-items-list">
      {cart.length === 0 ? (
        <p>Cart is currently empty</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default CartList;
