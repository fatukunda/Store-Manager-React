import React from 'react';
import { shallow } from 'enzyme';
import Products from '../Products';
describe('Products', () => {
    const component = shallow(<Products debug />);
    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

});