import React from 'react';
import { connect } from 'react-redux';

import { contactDetailsActionTypes } from '../../redux/contact-details/contact-details.types';


import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const ContactDetails = (props) => {
    
    return(
        <div className="flex flex-col flex-1 justify-center text-center items-center mt-12">
            <h1 className="font-bold tracking-widest" >Thank you for your trust and for your order!</h1>
            <p className="text-lg">Please enter contact details for successful delivery!</p>
            <form className="text-center w-full mb-16">
                <FormInput  name="name" 
                            type='text'
                            value={props.contact.name}
                            handleChange= {props.setContactName}
                            label='Name'/>
                <FormInput name="address" 
                            type='text'
                            value={props.contact.address}
                            handleChange={props.setContactAddress}
                            required
                            label='Address'/>
                <FormInput name="email" 
                            type='email'
                            value={props.contact.email}
                            handleChange= {props.setContactEmail} 
                            label='Email'/>
                <FormInput name="phone" 
                            type='tel'
                            value={props.contact.phone}
                            handleChange= {props.setContactPhone} 
                            required
                            label='Phone'/>
                {
                    !props.contact.address.length || !props.contact.phone.length ?
                    (<div className="text-red-500 font-bold text-xl my-4">Please fill in contact details!</div>) :(<CustomButton onPlacedOrder={props.onToggle}>PLACE ORDER</CustomButton>)
                }
                
                
            </form>
        </div>
    )};

    const mapStateToProps = state => {
        return {
            cart:state.cart,
            contact:state.contact
        }
    };


    const mapDispatchToProps =  dispatch => {
    return{
        setContactName: e =>{
            dispatch({type:contactDetailsActionTypes.SET_CONTACT_NAME, text: e.target.value});
        },
        setContactAddress: e =>{
            dispatch({type:contactDetailsActionTypes.SET_CONTACT_ADDRESS, text: e.target.value});
        },
        setContactEmail: e =>{
            dispatch({type:contactDetailsActionTypes.SET_CONTACT_EMAIL, text: e.target.value});
        },
        setContactPhone: e =>{
            dispatch({type:contactDetailsActionTypes.SET_CONTACT_PHONE, text: e.target.value});
        }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);