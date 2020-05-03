import React from 'react';

const CartItem =({item: {price, title, quantity}}) => {

    return(
    <div className='flex flex-col my-3'>
            <span className='capitalize mx-1'>{title}</span>
            <span className='mx-1 text-right'>{quantity} x {price} EUR</span>
    </div>

)};

export default CartItem;
