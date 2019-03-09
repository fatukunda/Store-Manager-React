import * as actions from '../actions/productActions';
import { productsUrl } from '../routes/index'

export const fetchProductsPending = (isfetchProductsPending) => ({
    type: actions.FETCH_PRODUCTS_PENDING,
    isfetchProductsPending
});

export const fetchProductsSuccess = (products) => ({
    type: actions.FETCH_PRODUCTS_SUCCESS,
    products
});

export const fetchProductsFailure = (error) => ({
    type: actions.FETCH_PRODUCTS_ERROR,
    error
});
export const fetchProducts = () => (dispatch) => {
    const token = localStorage.getItem("auth_token")
    const requestData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        }
    }
    dispatch(fetchProductsPending(true));
    return fetch(productsUrl, requestData)
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchProductsSuccess(data));
        })
        .catch((error) => {
            dispatch(fetchProductsFailure(error));
        });
};


