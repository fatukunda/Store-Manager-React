import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../LoginForm';

describe('Login Form', () => {
	const props = {
		login: jest.fn()
	};
	const wrapper = shallow(<LoginForm {...props} />);
	it('should render correctly in "debug" mode', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should submit the login form', () => {
		const event = {
			preventDefault: jest.fn()
		};
		wrapper.instance().submitHandler(event);
		expect(props.login).toHaveBeenCalled();
	});
	it('should capture form changes', () => {
		const event = {
			target: {
				name: 'some name',
				value: 'some value'
			}
		};
		wrapper.instance().changedHandler(event);
	});
});
