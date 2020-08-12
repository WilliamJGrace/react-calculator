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

    it('should render a div', () => {
        expect(wrapper.find('div').length).toEqual(1)
        
    });
});