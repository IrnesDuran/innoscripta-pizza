import React from 'react';
import {connect} from 'react-redux';
import './CartDropdown.styles.scss';
import CustomButton  from '../../components/CustomButton/CustomButton'
import {withRouter} from 'react-router-dom';

import CartItem from '../CartItem/CartItem';

import  { toggleCartHidden } from '../../redux/cart/cart.actions';



const CartDropdown =({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

            cartItems.length ? 

            cartItems.map(cartItem => 
                 <CartItem 
                 key= {cartItem.id}
                 item={cartItem}
                 />
                ) : <span className= 'empty-message'>Your cart is empty</span>
            }

        </div>
        <CustomButton onClick= {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());

            }}>Go to checkout</CustomButton>
    </div>


);
const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
  });

export default withRouter(connect(mapStateToProps)(CartDropdown));