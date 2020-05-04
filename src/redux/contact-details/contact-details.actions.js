import {cartActionTypes} from './cart.types';

export const setContactDetails = (item) => ({
    type: cartActionTypes.SET_CONTACT_DETAILS,
    payload: item
});



