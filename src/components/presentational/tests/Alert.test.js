import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';
describe('Alert', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<Alert debug />);

		expect(component).toMatchSnapshot();
	});
});
