// App.js
import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {
  return (
    <div id="main">
      <CartProvider>
        <Navbar />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
