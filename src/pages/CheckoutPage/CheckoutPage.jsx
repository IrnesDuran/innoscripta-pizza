import React, {useState} from 'react';

import { connect } from 'react-redux';

import './CheckoutPage.styles.scss';

import { clearCart } from '../../redux/cart/cart.actions';

import BuyItem from '../../components/BuyItem/BuyItem';
import ContactDetails from '../../components/ContactDetails/ContactDetails';


const CheckoutPage = (props) => {
    console.log(props)

     const [isProceeding, setIsProceeding] = useState(false);

     const delayRedirect = ( ) => {
        setIsProceeding(true);
        setTimeout(() => {
            setIsProceeding(false);
            props.history.push("/");
            props.clearCart();
        }, 3000);
     };


    const Ver1 = () => (<div className="text-6xl text-center"><h1>Thank you for your order! It will be on your address soon!</h1></div>);
 
    const deliveryPrice = props.cartItems.length ? 6 : 0;

    const total = props.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,deliveryPrice);
    
    
    return( <div>
  { isProceeding ? <Ver1/> :
      
    
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
        cartItems: state.cart.cartItems
    }
};

const mapDispatchToProps = dispatch => {
    return{
        clearCart: () => dispatch(clearCart())
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
