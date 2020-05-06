import React from 'react';
import { connect } from 'react-redux';

import OrderItem from '../../components/OrderItem/OrderItem';

const HomePage = (props) => {

    const {menu} = props;

    return(
      
        <div className="flex flex-wrap items-center justify-evenly h-64 mx-12 ">
            {menu.map(item => 
                (<div key= {item.id} className="box-border m-1/2 md:w-1/4 px-4"><OrderItem  item={item}/></div>))}

        </div>
    
    )};

    const mapStateToProps = state => {
        return {
            menu: state.pizza.pizza,
            cart:state.cart
        };
    }
    

export default connect(mapStateToProps)(HomePage);