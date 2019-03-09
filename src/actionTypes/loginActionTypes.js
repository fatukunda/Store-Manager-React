import * as actions from '../actions/loginActions';
import axios from 'axios';
import { loginUrl } from '../routes/index'
import setAuthToken from '../utils/setAuthToken';

export const loginPending = (isLoginPending) => ({
    type: actions.LOGIN_PENDING,
    isLoginPending
});

export const loginSuccess = (user) => ({
    type: actions.LOGIN_SUCCESS,
    user
});

export const loginfailure = (error) => ({
    type: actions.LOGIN_ERROR,
    error
});
export const login = (username, password) => (dispatch) => {
    const user = {
        username,
        password
    }
    const requestData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
    }
    dispatch(loginPending(true));
    return axios(loginUrl, requestData)
        .then((response) => {
            const { access_token, user_id, user_type } = response.data
            localStorage.setItem("auth_token", access_token)
            dispatch(loginSuccess(response.data));
            setAuthToken(access_token);
            window.location.href = "/adminPanel";

        })
        .catch((error) => {
            dispatch(loginfailure(error.response.data));
        });
};

export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch(loginSuccess({}));
};


