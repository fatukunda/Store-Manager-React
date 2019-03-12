import React from 'react';
import { shallow } from 'enzyme';
import SummarySideBar from '../SummarySideBar';
describe('SummarySideBar', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<SummarySideBar debug />);

		expect(component).toMatchSnapshot();
	});
});
