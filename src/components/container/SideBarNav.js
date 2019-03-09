import React from 'react';
import './styles/SideBarNav.css';

const SideBarNav = () => {
	return (
		<div className="col-md-2 SideBarNav">
			<nav className="mt-4">
				<ul>
					<li>
						<a href="#">Add Products</a>
					</li>
					<li className="mt-4">
						{' '}
						<a href="#">Add Product Category</a>
					</li>
					<li className="mt-4">
						<a href="#">View Products</a>
					</li>
					<li className="mt-4">
						<a href="#">View Sales</a>
					</li>
					<li className="mt-4">
						<a href="#">Add sales person</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default SideBarNav;
