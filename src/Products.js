import React, { useState } from 'react';
import './Products.css';

function Products({ setCart }) {
  const [products] = useState([

    {
      name: 'Iphone 12 Pro',
      price: '10.999.00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqmpeM1eF_qKfu7FJ1PRKQqNtghTWX3sXFw&usqp=CAU',
    },
    {
      name: 'HP Celeron',
      price: '45.000.00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWntfxwR1DNxqcfY_YMmhyJhwn6-zoehgRLH2bTxVertzv2px7I6h75rPNVetvKhGy6r0&usqp=CAU',
    },
    {
      name: 'Lamborghini',
      price: '546.677.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFdH2KvEyPm8R4mVuXStII5-NaX4LElyIUw&usqp=CAU',
    },
    {
        name: 'Neo Splash Black Dial',
        price: '12.934.00',
        image:
          'https://staticimg.titan.co.in/Titan/Catalog/1805QM04_1.jpg?impolicy=pqmed&imwidth=640 ',
      },
      {
        name: 'Propella Electric Bikes',
        price: '6.677.99',
        image:
          ' https://images.squarespace-cdn.com/content/v1/57d61144e58c62ac0e3179cf/bd7ab39f-de15-46de-be46-ae4ed74fee4e/Propella-blue-orange+background.jpeg ',
      },
      {
        name: 'Samsung Galaxy S22 Ultra',
        price: '1.677.99',
        image:
          ' https://mobile4u.co.za/wp-content/uploads/2022/04/samsung-galaxy-s22-ultra-5g-2.jpg',
      },
  ]);
  

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product-grid">
      {products.map((product, i) => {
        const { name, price, image } = product;
        return (
          <div key={i} className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{`Cost: $${price}`}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
