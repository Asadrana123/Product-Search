import React from 'react'
import './Card.css';
function Card() {
  return (
    <div className='card'>
      <div className='product-title'>Product Name</div>
      <div className='description-container'>
        <div className='description'>Product Description</div>
        <div className='description'>Product Description</div>
        <div className='description'>Product Description</div>
        <div className='description'>Product Description</div>
        <div className='description'>Product Description</div>
      </div>
      <div className='card-footer' >
           <div className='footer-product-name'>Mobile</div>
           <div className='footer-product-price'>$100</div>
      </div>
    </div>
  )
}

export default Card