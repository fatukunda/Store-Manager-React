import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './components/container/LoginForm';
import NavBar from './components/container/NavBar';
import AdminPanel from './components/container/AdminPanel';
import './App.css';

const App = () => (
	<Router>
		<div className="App">
			<NavBar />
			<Route exact path="/" component={LoginForm} />
			<Route exact path="/adminPanel/products" component={AdminPanel} />
		</div>
	</Router>
);

export default App;
