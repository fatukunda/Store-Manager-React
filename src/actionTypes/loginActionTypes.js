import * as actions from '../actions/loginActions';
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
        body: JSON.stringify(user),
    }
    dispatch(loginPending(true));
    return fetch(loginUrl, requestData)
        .then(res => res.json())
        .then((data) => {
            if (data.message) {
                dispatch(loginfailure(data.message));
            }
            else {
                const { access_token, user_id, user_type } = data
                localStorage.setItem("auth_token", access_token)
                dispatch(loginSuccess(data));
                window.location.href = "/adminPanel/products";
            }
        })
        .catch((error) => {
        });
};

export const logout = () => (dispatch) => {
    localStorage.clear();
    return dispatch(loginSuccess({}));
};


