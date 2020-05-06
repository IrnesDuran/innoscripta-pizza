import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import CartItem from './CartItem';



describe('Testing CartItem',()=>{

    it('should test CartItem snapshot',()=>{
        const mockItem = {
            item: {price:10, title:"Margherita",quantity:1}
        };

        expect(shallow(<CartItem item={mockItem}/>)).toMatchSnapshot();

    });

});

