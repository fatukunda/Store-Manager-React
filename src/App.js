import React from "react";
import jwt_decode from 'jwt-decode';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './components/container/LoginForm';
import AdminPanel from './components/container/AdminPanel';
import './App.css';
import SingleProductView from './components/container/SingleProductView';
import Products from './components/container/Products';

const App = () => (
    <Router>
        <div className="App">
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/adminPanel/products" component={AdminPanel} />
            {/* <Route exact path="/adminPanel/products" component={Products} /> */}
            {/* <Route path="/adminPanel/products" component={Products} /> */}
            <Route exact path="/adminPanel/products/:id" component={SingleProductView} />
        </div>
    </Router>

);

export default App;