import React, { Component } from 'react';
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import NavBar from './NavBar';
import logo from '../../assets/images/logo.png';
import './styles/NavBar.css';
import SideBarNav from './SideBarNav';
import SummarySideBar from './SummarySideBar';
import "./styles/AdminPanel.css";
import Products from './Products';
import { logout } from '../../actionTypes/loginActionTypes';

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});
class AdminPanel extends Component {

    clickHandler = () => {
        this.props.logout();
        window.location.href = '/'
    }
    render() {
        return (
            <section className="AdminPanel">
                <div>
                    <NavBar className="navbar NavBar" logo={logo} brand="Store Manager" clicked={this.clickHandler} />
                </div>
                <div className="row">
                    <SideBarNav />
                    <SummarySideBar />
                    <Products />
                </div>
            </section>
        )
    }
}
AdminPanel.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AdminPanel);