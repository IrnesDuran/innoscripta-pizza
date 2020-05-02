import React from 'react';
import { connect } from 'react-redux';

import OrderItem from '../../components/OrderItem/OrderItem';

const HomePage = (props) => {
    const {menu} = props;

    return(
      
        <div className="flex flex-wrap items-center justify-evenly h-64">
            {menu.map(item => 
                (<div key= {item.id}>
                    <OrderItem className="w-32 h-32 flex-1" item={item}/>
                </div>))}

        </div>
    
    )};

    const mapStateToProps = state => {
        return {
            menu: state.pizza.pizza
        };
    }
    

export default connect(mapStateToProps)(HomePage);