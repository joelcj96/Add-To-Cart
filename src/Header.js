import React from 'react';
import './Header.css';

function Header({ cart }) {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Joel <span className="header-subtitle">Shopping App</span></h1>
      </div>
      <div>
        <button className="header-button">Cart ({cart.length})</button>
      </div>
    </div>
  );
}

export default Header;

