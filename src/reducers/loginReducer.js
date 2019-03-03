import * as actions from '../actions/loginActions';

const initialState = {
    isLoginPending: false,
    user: {},
    error: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });
        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginPending: false,
                user: action.user
            });
        case actions.LOGIN_ERROR:
            return Object.assign({}, state, {
                isLoginPending: false,
                error: action.error
            });
        default:
            return state;
    }
}
export default loginReducer;