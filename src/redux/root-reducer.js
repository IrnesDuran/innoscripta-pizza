import { combineReducers } from 'redux';

import pizzaReducer from '../redux/pizza/pizza.reducer';
import cartReducer from '../redux/cart/cart.reducer';


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    cart:cartReducer

});

export default rootReducer;