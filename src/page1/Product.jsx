import React from 'react';

function Product({ id, name, price, addToCart }) {
  const handleClick = () => {
    const product = { id, name, price };
    addToCart(product);
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Product;
