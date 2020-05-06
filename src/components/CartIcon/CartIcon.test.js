import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import {CartIcon} from './CartIcon';



describe('Testing CartIcon value',()=>{

    it('should test CartIcon snapshot',()=>{
        expect(shallow(<CartIcon/>)).toMatchSnapshot();

    });

    it('should test if cart icon value is 0',()=>{
        const wrapper = shallow(<CartIcon/>);
        const count =wrapper.find('span.item-count');
        expect(count.text()).toBe("");
    });


    it('should test if cart icon value is incramented',()=>{
        const mockProps = {
            itemCount: 1,
            toggleCartHidden:jest.fn()
      };
        const wrapper = shallow(<CartIcon {...mockProps}/>);
        expect(wrapper.text()).toBe("1");
    });

});

