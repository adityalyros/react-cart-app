// Navbar.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <h1>useReducer</h1>
      <div id="nav-cart-item-count">{cart.length}</div>
    </nav>
  );
}

export default Navbar;
