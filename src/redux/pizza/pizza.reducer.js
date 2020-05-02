import MENU from './menu.data';

const INITIAL_STATE = {
    pizza: MENU
};


const pizzaReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default pizzaReducer;