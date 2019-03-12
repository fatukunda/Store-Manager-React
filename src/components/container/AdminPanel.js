import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBarNav from './SideBarNav';
import SummarySideBar from './SummarySideBar';
import Products from './Products';

class AdminPanel extends Component {
	render() {
		return (
			<section>
				<div className="row">
					<SideBarNav />
					<SummarySideBar />
					<Products />
				</div>
			</section>
		);
	}
}
AdminPanel.propTypes = {
	logout: PropTypes.func.isRequired
};

export default AdminPanel;
