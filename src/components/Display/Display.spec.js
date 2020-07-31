import Display from './Display'
import React from 'react'
import { shallow } from 'enzyme'


describe('Display', () => {
    let wrapper
    
    beforeEach(() => wrapper = shallow(<Display />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });
});