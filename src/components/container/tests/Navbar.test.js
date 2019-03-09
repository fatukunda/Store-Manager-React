import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../NavBar';

describe('Navbar', () => {
	const props = {
		logout: jest.fn()
	};
	const wrapper = shallow(<NavBar {...props} />);
	it('should render correctly in "debug" mode', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should logout', () => {
		wrapper.instance().clickHandler();
		expect(props.logout).toHaveBeenCalled();
	});
});
