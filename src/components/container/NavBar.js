import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import './styles/NavBar.css';
import { logout } from '../../actionTypes/loginActionTypes';

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout())
});

export class NavBar extends Component {
	clickHandler = () => {
		this.props.logout();
		window.location.href = '/';
	};

	render() {
		return (
			<nav className="navbar NavBar ">
				<Link to="/" className="navbar-brand">
					<img src={logo} width="50" height="50" alt="logo" /> Store Manager
				</Link>
				<button
					className="navbar-toggler navbar-dark"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<button type="button" className="btn btn-outline-info" onClick={this.clickHandler}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
NavBar.propTypes = {
	logout: PropTypes.func.isRequired
};
export default connect(null, mapDispatchToProps)(NavBar);
