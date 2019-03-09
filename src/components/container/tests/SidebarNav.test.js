import React from 'react';
import { shallow } from 'enzyme';
import SideBarNav from '../SideBarNav';
describe('SideBarNav', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<SideBarNav debug />);

		expect(component).toMatchSnapshot();
	});
});
