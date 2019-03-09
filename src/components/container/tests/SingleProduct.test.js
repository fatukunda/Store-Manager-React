import React from 'react';
import { shallow } from 'enzyme';
import SingleProduct from '../singleProduct';
describe('singleProduct', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SingleProduct debug />);

        expect(component).toMatchSnapshot();
    });
});