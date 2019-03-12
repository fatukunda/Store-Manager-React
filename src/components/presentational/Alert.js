import React from 'react';

const Alert = ({ message, className }) => {
	return (
		<div className={className} role="alert">
			{message}
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};
export default Alert;
