import React from 'react'
import { shallow } from 'enzyme'
import Keypad from './Keypad'

describe('keypad', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <Keypad
            callOperator={jest.fn()}
            numbers={[]}
            operators={[]}
            setOperator={jest.fn()}
            updateDisplay={jest.fn()}
            />

        )
        // Because we're rendering Keypad directly from it's file, it does not have access to the Calculator methods.
        // In place of these methods, we use jest.fn(), a Jest function that creates a mock function
    })

    it('should render 2 divs', () => {
        expect(wrapper.find('div').length).toEqual(3)
        
    });

    it('renders values of numbers', () => {
        wrapper.setProps({numbers: ['0', '1', '2']})
        expect(wrapper.find('.numbers-container').text()).toEqual('012')
        
    });

    it('redners the values of the operators', () => {
        wrapper.setProps({operators: ['+', '-', '*', '/']})
        expect(wrapper.find('.operators-container').text()).toEqual('+-*/')

    });
});