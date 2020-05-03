import React from 'react';
import {connect} from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions'


const OrderItem = (props) => {

    return(
            <div className="group relative flex flex-col rounded-lg shadow-lg overflow-hidden mx-2 my-4">
                <div className="rounded group-hover:opacity-75">

                    <img className="object-cover h-64 w-64" 
                    src={props.item.imageUrl} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>
                </div>
                <button className="absolute h-12 w-full bg-black text-white 
                        text-center text-base uppercase font-medium inset-x-0 top-0 my-48 border-solid border border-black 
                        hover:bg-white hover:text-black hover:border-solid hover:border hidden group-hover:block text-center opacity-75"
                        onClick= {() => props.addItem(props.item)}
                        >
                        ADD TO CART
                    </button>
                <div className=" flex flex-col h-40 p-2">
                    <div className="capitalize text-xl font-semibold">{props.item.title}</div>
                    {
                       props.item.ingredients.map(ingr =><div className="capitalize text-xs text-right" key={ingr}>{ingr}</div> ) 
                    }
                    <div className="absolute mt-6 font-semibold bottom-0">{props.item.price} EUR</div>

                </div>
            </div>
    )};

    const mapDispatchToProps = dispatch => {
        return{
            addItem: item => dispatch(addItem(item))
        }
    }

export default connect(null, mapDispatchToProps)(OrderItem);