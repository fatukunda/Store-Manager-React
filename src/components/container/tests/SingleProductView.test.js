import React from 'react';
import { shallow } from 'enzyme';
import { SingleProductView } from '../SingleProductView';

describe('SingleProductView', () => {
	const props = {
		fetchSingleProduct: jest.fn(),
		product: {
			name: 'some product name',
			unit_price: 3000,
			quantity: 6
		}
	};
	const wrapper = shallow(<SingleProductView {...props} />);

	it('should render correctly in "debug" mode', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('tests fetches single product when component mounts', () => {
		wrapper.instance().componentDidMount();
		expect(props.fetchSingleProduct).toHaveBeenCalled();
	});
});
