import React from 'react';

const Product = ({ name, price, quantity, id, clicked }) => {
	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>{price}</td>
			<td>
				<button type="button" className="btn btn-outline-info" onClick={clicked}>
					View more
				</button>
			</td>
		</tr>
	);
};
export default Product;
