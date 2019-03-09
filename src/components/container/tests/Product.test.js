import React from 'react';
import { shallow } from 'enzyme';
import Product from '../Product';
describe('Product', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Product debug />);

        expect(component).toMatchSnapshot();
    });
});