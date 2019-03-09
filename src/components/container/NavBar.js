import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ className, brand, logo, clicked }) => {
    return (
        <nav className={className}>
            <Link to="/adminPanel" className="navbar-brand">
                <img src={logo} width="50" height="50" alt="Logo" />{brand}
            </Link>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/adminPanel" className="nav-link">
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/adminPanel" className="nav-link">
                            <span className="sr-only"></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-info" onClick={clicked}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;