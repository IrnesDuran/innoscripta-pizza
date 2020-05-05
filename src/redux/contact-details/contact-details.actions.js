import {contactDetailsActionTypes } from './contact-details.types';

export const setContactDetails = (name,address,email,phone) => ({
    type: contactDetailsActionTypes.SET_CONTACT_DETAILS,
    name:name,
    address:address,
    email:email,
    phone:phone
});

export const setContactName = (text) => ({
    type: contactDetailsActionTypes.SET_CONTACT_NAME,
    payload: text
});

export const setContactAddress = (text) => ({
    type: contactDetailsActionTypes.SET_CONTACT_ADDRESS,
    payload: text
});

export const setContactEmail = (text) => ({
    type: contactDetailsActionTypes.SET_CONTACT_EMAIL,
    payload: text
});

export const setContactPhone = (text) => ({
    type: contactDetailsActionTypes.SET_CONTACT_PHONE,
    payload: text
});

export const clearContacts = () => ({
    type: contactDetailsActionTypes.CLEAR_CONTACTS,
});
