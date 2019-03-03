import React from "react";
import LoginForm from './components/container/LoginForm';
import Navigation from './components/container/Navigation';
import AdminPanel from './components/container/AdminPanel';
import './App.css'

const App = () => (
    <div className="App">
        {/* <Navigation /> */}
        {/* <LoginForm /> */}
        <AdminPanel />
    </div>
);

export default App;