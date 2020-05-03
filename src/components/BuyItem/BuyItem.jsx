import React from 'react';
import { connect } from 'react-redux';
import './BuyItem.styles.scss';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

const BuyItem = (props) => {


    const dollarsPrice = props.item.price*1.108
    return(
        <div className='checkout-item'>
                <span className='title capitalize'>{props.item.title}</span>       
                <span className='quantity'>
                        <div className='arrow' onClick={() => props.removeItem(props.item)}>&#10094;</div>
                            <span className='value'>{props.item.quantity}</span>
                         <div className='arrow'onClick={() => props.addItem(props.item)}>&#10095;</div>
                    </span>
                <span className='price'>{props.item.price} EUR /{dollarsPrice.toFixed(2)} USD</span>
                <div className='remove-button' onClick={()=> props.clearItem(props.item)}>&#10005;</div>
        </div>
    )};

const mapDispatchToProps =  dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
    


export default connect(null,mapDispatchToProps)(BuyItem);