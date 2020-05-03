import React from 'react';

import { connect } from 'react-redux';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = (props) => {
    return(
    <div className="flex justify-between items-center px-6 border-b border-black">
        <a href="/">InnoScripta Pizza</a>
        <CartIcon/>
        {
            props.toggleCartHidden ? null : <CartDropdown/>
        }
    </div>
        
    )};

    const mapStateToProps = state => {
        return {
            toggleCartHidden: state.cart.hidden
        };
    }
    
    
    export default connect(mapStateToProps)(Header);
















