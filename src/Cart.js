// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <button id="clear-all-cart" onClick={handleClearCart}>Clear Cart</button>
      <div id="cart-items-list">
        {cart.length === 0 ? (
          <p>Cart is currently empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <p id={`cart-item-price-${item.id}`}>Price: ${item.price}</p>
              <p id={`cart-amount-${item.id}`}>Amount: {item.amount}</p>
              <button id={`increment-btn-${item.id}`} onClick={() => handleIncrement(item.id)}>+</button>
              <button id={`decrement-btn-${item.id}`} onClick={() => handleDecrement(item.id)}>-</button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div id="cart-total-amount">
        Total: ${cart.reduce((acc, item) => acc + (item.price * item.amount), 0).toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
