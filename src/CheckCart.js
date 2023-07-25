import React from 'react';
import './CheckCart.css';

function CheckCart({ cart, setCart }) {
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((product, index) => (
            <li key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-info">
                <h3>{product.name}</h3>
                <p>{`Price: $${product.price}`}</p>
              </div>
              <button className='btn' onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckCart;
