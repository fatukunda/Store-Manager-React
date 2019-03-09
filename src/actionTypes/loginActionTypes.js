import * as actions from '../actions/loginActions';
import axios from 'axios';
import { loginUrl } from '../routes/index'

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
            localStorage.setItem(
                {
                    "auth-token": access_token
                },
                { "user_id": user_id },
                {
                    "user_type": user_type
                }
            );
            dispatch(loginSuccess(response.data));
            // window.location.href = "/admin-panel";

        })
        .catch((error) => {
            dispatch(loginfailure(error.response.data));
        });
};


