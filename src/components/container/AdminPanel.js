import React, { Component } from 'react';
import NavBar from './NavBar';
import logo from '../../assets/images/logo.png';
import './styles/NavBar.css';
import SideBarNav from './SideBarNav';
import SummarySideBar from './SummarySideBar';
import "./styles/AdminPanel.css";
import Products from './Products';

class AdminPanel extends Component {
    state = {}

    componentDidMount() {

    }
    render() {
        return (
            <section className="AdminPanel">
                <div>
                    <NavBar className="navbar NavBar" logo={logo} brand="Store Manager" />
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

export default AdminPanel;