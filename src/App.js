// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <CartList />
        <button id="clear-all-cart">Clear Cart</button>
        <p id="cart-total-amount">Total: $0.00</p>
      </div>
    </CartProvider>
  );
}

export default App;
