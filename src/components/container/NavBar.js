import React from 'react';

const NavBar = ({ className, brand, logo }) => {
    return (
        <nav className={className}>
            <a className="navbar-brand" href="#">
                <img src={logo} width="50" height="50" alt="Logo" />{brand}
            </a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;