import React from 'react';
import { configure, shallow, render  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {Header} from './Header';
import CartIcon from '../../components/CartIcon/CartIcon';



describe('Testing Cart in Header Component',()=>{

    it('should test if cart icon exists',()=>{
        const wrapper = shallow (<Header/>);
        expect(wrapper.find(CartIcon)).toHaveLength(1);

    });

    // it('should test if cart icon value is 0',()=>{
    //     const wrapper = render(<CartIcon/>);
    //     const count =wrapper.find('span.item-count');
    //     expect(count.text()).toBe("");
    // });


});


