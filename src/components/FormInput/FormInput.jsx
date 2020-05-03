import React from 'react';
import './FormInput.styles.scss';


const FormInput =({handleChange, label, ...otherProps}) => (
    <div className='group relative' >
        <input 
            className='form-input'
            onChange = {handleChange}
            {...otherProps}/>
             {
                 label ? 
             (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}> {label} </label>) :
                 null
             }
    </div>

);  

export default FormInput;
