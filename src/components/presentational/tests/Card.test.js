import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Alert';
describe('Card', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Card debug />);

        expect(component).toMatchSnapshot();
    });
});