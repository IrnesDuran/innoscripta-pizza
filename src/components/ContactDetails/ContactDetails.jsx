import React, {useState} from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const ContactDetails = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    return(
        <div className="flex flex-col flex-1 justify-center text-center items-center mt-12">
            <h1 className="font-bold tracking-widest" >Thank you for your trust and for your order!</h1>
            <p className="text-lg">Please enter contact details for successful delivery!</p>
            <form className="text-center w-full mb-16">
                <FormInput name="name" 
                            type='text'
                            value={inputName}
                            handleChange= {(e)=>setInputName(e.target.value)}
                            label='Name'/>
                <FormInput name="address" 
                            type='text'
                            value={inputAddress}
                            handleChange={(e)=>setInputAddress(e.target.value)}
                            required
                            label='Address'/>
                <FormInput name="email" 
                            type='email'
                            value={inputEmail}
                            handleChange= {(e)=>setInputEmail(e.target.value)} 
                            label='Email'/>
                <FormInput name="phone" 
                            type='tel'
                            value={inputPhone}
                            handleChange= {(e)=>setInputPhone(e.target.value)} 
                            required
                            label='Phone'/>
                <CustomButton onPlacedOrder={props.onToggle}>PLACE ORDER</CustomButton>
            </form>
        </div>
    )};

export default ContactDetails;