import React from 'react';
import './CartIcon.styles.scss';
import  { connect } from 'react-redux';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions'



const CartIcon =(props) => (
    <div className='cart-icon' onClick={props.toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{props.itemCount}</span>
    </div>
);


const mapStateToProps = state => ({
    itemCount: state.cart.cartItems.length
  });
  

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())

});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

