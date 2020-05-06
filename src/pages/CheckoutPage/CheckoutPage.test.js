import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import {CheckoutPage} from './CheckoutPage';
import BuyItem from '../../components/BuyItem/BuyItem';




describe('Testing CheckoutPage',()=>{

    let mockProps;
    let wrapper;

    beforeEach(() => {
        mockProps = {cartItems:[]}
        wrapper = shallow(<CheckoutPage {...mockProps}/>);
    });
    

 

    it('should test CheckoutPage snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });


    it('should test if cart items exist',()=>{
        expect(wrapper.find(BuyItem)).toHaveLength(0);

    });

});
