import React from 'react'
import './Card.css';
function Card({ product }) {
  return (
    <div className='card'>
      <div className='product-title'>{product.name}</div>
      <div className='description-container'>
        {product.description.map((line, i) => (
          <div key={i} className='description'>{line}</div>
        ))}
      </div>
      <div className='card-footer'>
        <div className='footer-product-name'>{product.category}</div>
        <div className='footer-product-price'>${product.price}</div>
      </div>
    </div>
  );
}

export default Card