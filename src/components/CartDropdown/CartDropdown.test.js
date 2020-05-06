import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import {CartDropdown} from './CartDropdown';




describe('Testing CartDropdown',()=>{

    let mockProps;
    let wrapper;

    beforeEach(() => {
        mockProps = {cartItems:[]}
        wrapper = shallow(<CartDropdown {...mockProps}/>);
    });
    

 

    it('should test CartDropdown snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should test if location pathname prior to being included in Checkout Page', () =>{
        expect(location.pathname).toEqual('/');

    });

});

