import React from 'react';
import './styles/ProductView.css';

const ProductView = ({ name, price, quantity }) => {
	return (
		<div className="card ProductView mt-4">
			<img className="card-image-top" src="https://via.placeholder.com/150" alt="product image" />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p>Price: {price}</p>
				<p>Quantity: {quantity}</p>
			</div>
		</div>
	);
};
export default ProductView;
