import React from 'react';

import CartIcon from '../CartIcon/CartIcon';

const Header = (props) => {
    return(
    <div className="flex justify-between items-center px-6 border-b border-black">
        <a href="/">InnoScripta Pizza</a>
        <CartIcon/>

    </div>
        
    )};

export default Header;