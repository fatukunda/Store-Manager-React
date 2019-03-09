import * as actions from '../actions/singleProductActions';

const initialState = {
    isfetchSingleProductPending: false,
    product: {},
    error: null
};

const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SINGLE_PRODUCT_PENDING:
            return Object.assign({}, state, {
                isfetchSingleProductPending: action.isfetchSingleProductPending
            });
        case actions.FETCH_SINGLE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                isfetchSingleProductPending: false,
                product: action.product
            });
        case actions.FETCH_SINGLE_PRODUCT_ERROR:
            return Object.assign({}, state, {
                isfetchSingleProductPending: false,
                error: action.error
            });
        default:
            return state;
    }
}
export default singleProductReducer;