// src/components/CartItem.js

import React from "react";

const CartItem = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p id={`cart-item-price-${item.id}`}>{item.price}</p>
      <div>
        <button id={`decrement-btn-${item.id}`}>-</button>
        <span id={`cart-amount-${item.id}`}>{item.amount}</span>
        <button id={`increment-btn-${item.id}`}>+</button>
      </div>
      <button id={`remove-item-btn-${item.id}`}>Remove</button>
    </div>
  );
};

export default CartItem;
