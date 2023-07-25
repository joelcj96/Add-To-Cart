import React, { useState } from 'react';
import Header from "./Header";
import Products from "./Products";
import CheckCart from './CheckCart';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
          <Header cart={cart} />
          <Products setCart={setCart} />
          <CheckCart cart={cart} setCart={setCart}/> 
    </div>
  );
}

export default App;
