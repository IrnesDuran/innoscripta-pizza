import { combineReducers } from 'redux';

import pizzaReducer from '../redux/pizza/pizza.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import contactDetailsReducer from '../redux/contact-details/contact-details.reducer';


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    cart:cartReducer,
    contact:contactDetailsReducer

});

export default rootReducer;