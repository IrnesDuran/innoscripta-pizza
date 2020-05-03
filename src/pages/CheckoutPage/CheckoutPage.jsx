import React from 'react';

import { connect } from 'react-redux';

import './CheckoutPage.styles.scss';

import BuyItem from '../../components/BuyItem/BuyItem';


const CheckoutPage = (props) => {

    const total = props.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,0);

    const dollarsTotal = total*1.108;

    return(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
                {props.cartItems.map(item => 
                (<BuyItem key= {item.id} item={item}/>))}
                <div className='total'><span>TOTAL: EUR ${total.toFixed(2)}/ USD ${dollarsTotal.toFixed(2)}</span>
        </div>
    </div>

)};


const mapStateToProps=  state => {
    return {
        cartItems: state.cart.cartItems
    }
}


export default connect(mapStateToProps)(CheckoutPage);
