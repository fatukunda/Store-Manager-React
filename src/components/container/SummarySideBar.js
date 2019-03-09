import React from 'react';
import './styles/SummarySideBar.css';
import Card from '../presentational/Card';

const SummarySideBarNav = () => {
	return (
		<div className="col-md-2 SummarySideBar">
			<Card header="Store attendants" icon="fas fa-user-friends fa-2x" id="attendantsCard" body="Attendants" />
			<Card header="Sales" icon="fas fa-euro-sign fa-2x" id="salesCard" body="Sales" />
			<Card header="Products" icon="fas fa-shopping-basket fa-2x" id="productsCard" body="Products" />
		</div>
	);
};
export default SummarySideBarNav;
