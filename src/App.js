import React from "react";
import jwt_decode from 'jwt-decode';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './components/container/LoginForm';
import AdminPanel from './components/container/AdminPanel';
import { logout, loginSuccess } from './actionTypes/loginActionTypes';
import './App.css';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import SingleProduct from './components/container/singleProduct';


if (localStorage.auth_token) {
    setAuthToken(localStorage.auth_token);
    const userData = jwt_decode(localStorage.auth_token);
    store.dispatch(loginSuccess(userData));

    const currentTime = Date.now() / 1000;
    if (userData.exp < currentTime) {
        logout();
        window.location.href = "/";
    }
}
const App = () => (
    <Router>
        <div className="App">
            <Route exact path="/" component={LoginForm} />
            <Route path="/adminPanel" component={AdminPanel} />
            <Route path="/products/:id" component={SingleProduct} />
        </div>
    </Router>

);

export default App;