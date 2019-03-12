import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({ type, name, value, changed, required, className, id, placeholder }) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			value={value}
			onChange={changed}
			required={required}
			className={className}
			placeholder={placeholder}
		/>
	);
};

TextInputField.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	changed: PropTypes.func,
	required: PropTypes.bool.isRequired
};
TextInputField.defaultProps = {
	value: '',
	required: true,
	type: ''
};

export default TextInputField;
