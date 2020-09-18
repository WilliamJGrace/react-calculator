import { shallow } from 'enzyme'
import React from 'react'
import Key from '../Key/Key'


describe('Key', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Key 
            keyAction={jest.fn()}
            keyType={''}
            keyValue={''}
            />
            )
    })


    it('should render a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
        
    });
    
});