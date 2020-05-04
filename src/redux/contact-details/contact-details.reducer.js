import { contactDetailsActionTypes } from './contact-details.types';

const INITIAL_STATE = {
    name:'',
    address:'',
    email:'',
    phone:''
};


const contactDetailsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default contactDetailsReducer;