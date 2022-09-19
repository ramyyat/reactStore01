import React from 'react'
import "./oneProductCard.css";

export default function OneProductCard(props) {
  return (
    <div className='onProductCard'>
        <div className='productImage'>
            <img src={props.image} width="90%" />
        </div>
        <div className='productTitle'>
            {props.title}
        </div>
        <div className='productPrice'>
            {props.price} LE
        </div>
    </div>
  )
}
