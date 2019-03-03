import * as actions from '../actions/productActions';

const initialState = {
    isfetchProductsPending: false,
    products: [],
    error: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_PRODUCTS_PENDING:
            return Object.assign({}, state, {
                isfetchProductsPending: action.isfetchProductsPending
            });
        case actions.FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isfetchProductsPending: false,
                products: action.products
            });
        case actions.FETCH_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                isfetchProductsPending: false,
                error: action.error
            });
        default:
            return state;
    }
}
export default productsReducer;