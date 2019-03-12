import React from 'react';
import { shallow } from 'enzyme';
import AdminPanel from '../AdminPanel';
describe('AdminPanel', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<AdminPanel debug />);

		expect(component).toMatchSnapshot();
	});
});
