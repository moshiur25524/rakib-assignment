// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
// some problem is facing
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  
    const {img, name, price,seller,ratings}=props.product;
    // console.log(props.product);
    // console.log(props);
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating: {ratings} star</small></p>
            </div>
    <button onClick={()=>props.handleAddToCart(props.product)} className='product-btn' ><p className='btn-text'>Add to Cart</p>
    {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
    </button>
    
        </div>
    );
};

export default Product;