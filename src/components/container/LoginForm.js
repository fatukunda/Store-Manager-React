import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../../actionTypes/loginActionTypes";
import TextInputField from '../presentational/TextInput';
import Alert from '../presentational/Alert';
import "./styles/LoginForm.css";
import Navigation from './Navigation';

const mapStateToProps = state => ({
    isLoginPending: state.loginReducer.isLoginPending,
    user: state.loginReducer.user,
    error: state.loginReducer.error,
});
const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }
    componentDidMount() {
    }
    submitHandler = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
    }
    changedHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const { username, password } = this.state;
        const { isLoginPending, error } = this.props;
        return (
            <div>
                <Navigation />
                <form className="LoginForm" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <TextInputField
                            name="username"
                            value={username}
                            changed={this.changedHandler}
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            required={true} />
                    </div>
                    <div className="form-group">
                        <TextInputField
                            name="password"
                            value={password}
                            changed={this.changedHandler}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            required />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-info btn-block mb-4"
                        value="Sign In" />
                    {isLoginPending && <div>Loading ........</div>}
                    {error && <Alert className="alert alert-danger alert-dismissible fade show mt-6" message={error.message} />}
                </form>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);