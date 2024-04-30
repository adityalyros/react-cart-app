// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>useReducer</h1>
      <div>
        <img src="cart-icon.png" alt="Cart Icon" />
        <span id="nav-cart-item-count">0</span>
      </div>
    </nav>
  );
};

export default Navbar;
