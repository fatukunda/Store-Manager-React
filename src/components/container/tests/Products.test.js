import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../Products';

describe('SingleProductView', () => {
	const props = {
		fetchProducts: jest.fn(),
		products: [ { id: 1, name: 'some name' } ],
		fetchSingleProduct: jest.fn()
	};
	const wrapper = shallow(<Products {...props} />);

	it('should render correctly in "debug" mode', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('tests fetches products when component mounts', () => {
		wrapper.instance().componentDidMount();
		expect(props.fetchProducts).toHaveBeenCalled();
	});
	it('tests clickHandler', () => {
		wrapper.instance().clickHandler();
		expect(props.fetchSingleProduct).toHaveBeenCalled();
	});
	it('tests backHandler', () => {
		wrapper.instance().backHandler();
		expect(wrapper.state('isFetchSingleProduct')).toEqual(false);
	});
});
