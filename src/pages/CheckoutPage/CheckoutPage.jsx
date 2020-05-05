import React, {useState} from 'react';

import { connect } from 'react-redux';

import './CheckoutPage.styles.scss';

import { clearCart } from '../../redux/cart/cart.actions';
import { clearContacts } from '../../redux/contact-details/contact-details.actions';

import BuyItem from '../../components/BuyItem/BuyItem';
import ContactDetails from '../../components/ContactDetails/ContactDetails';

import {populateDB} from '../../backendFunctions';


const CheckoutPage = (props) => {

     const [isProceeding, setIsProceeding] = useState(false);

    //Conditional component for rendering after purchase 
    const AfterPurchase = () => (<div className="text-3xl text-center w-4/5 mx-auto my-12"><h1>Thank you for your order! It will be on your address soon!</h1></div>);
 
    //delivery price to be included in cart is not empty
    const deliveryPrice = props.cartItems.length ? 6 : 0;

    //total price of purchase
    const total = props.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,deliveryPrice);


    //stringified order name and quantity to be pushed to DB
    const orderString = JSON.stringify(props.cartItems.map(item=> {return item.title+" x "+item.quantity}))
    

    const delayRedirect = ( ) => {
        setIsProceeding(true);
        populateDB(
            orderString,
            total,
            props.contact.name,
            props.contact.address,
            props.contact.email,
            props.contact.phone
        );
        setTimeout(() => {
            setIsProceeding(false);
            props.history.push("/");
            props.clearCart();
            props.clearContacts();
        }, 3000);
     };

    
    return( <div>
  { isProceeding ? <AfterPurchase/> :
      
    
    ( <div className='checkout-page'>
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
                {props.cartItems.length ? <div className="ml-auto text-lg mt-2"> Delivery price:EUR ${deliveryPrice}/ USD ${deliveryPrice*1.108.toFixed(2)} </div> : null}
        <div className='total'><span>TOTAL: EUR {total.toFixed(2)}/ USD {(total*1.108).toFixed(2)}</span></div>
        <div> {props.cartItems.length ? <ContactDetails onToggle={delayRedirect} />: null} </div>
    </div>)}
    </div>
)};


const mapStateToProps=  state => {
    return {
        cartItems: state.cart.cartItems,
        contact: state.contact
    }
};

const mapDispatchToProps = dispatch => {
    return{
        clearCart: () => dispatch(clearCart()),
        clearContacts: () => dispatch(clearContacts())
    }
};




export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
