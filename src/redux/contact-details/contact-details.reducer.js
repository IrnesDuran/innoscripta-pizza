import { contactDetailsActionTypes } from './contact-details.types';

const INITIAL_STATE = {
    name:'',
    address:'',
    email:'',
    phone:''
};


const contactDetailsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case contactDetailsActionTypes.SET_CONTACT_NAME:
            return {...state,
                name: action.text
            };
        case contactDetailsActionTypes.SET_CONTACT_ADDRESS:
            return {...state,
                address: action.text
            };
        case contactDetailsActionTypes.SET_CONTACT_EMAIL:
            return {...state,
                email: action.text
            };
        case contactDetailsActionTypes.SET_CONTACT_PHONE:
            return {...state,
                phone: action.text
            };  
        case contactDetailsActionTypes.CLEAR_CONTACTS:
            return {...state,
                name:'',
                address:'',
                email:'',
                phone:''
            };       
        default:
            return state;
    };
};


export default contactDetailsReducer;