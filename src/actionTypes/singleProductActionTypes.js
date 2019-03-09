import * as actions from '../actions/singleProductActions';
import { productsUrl } from '../routes/index'

export const fetchSingleProductsPending = (isfetchSingleProductPending) => ({
    type: actions.FETCH_SINGLE_PRODUCT_PENDING,
    isfetchSingleProductPending
});

export const fetchSingleProductsSuccess = (product) => ({
    type: actions.FETCH_SINGLE_PRODUCT_SUCCESS,
    product
});

export const fetchSingleProductFailure = (error) => ({
    type: actions.FETCH_SINGLE_PRODUCT_ERROR,
    error
});
export const fetchSingleProduct = (productId) => (dispatch) => {
    const token = localStorage.getItem("auth_token")
    const requestData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    dispatch(fetchSingleProductsPending(true));
    return fetch(`${productsUrl}/${productId}`, requestData)
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchSingleProductsSuccess(data));
            window.location.href = `/adminPanel/products/${productId}`
        })
        .catch((error) => {
            dispatch(fetchSingleProductFailure(error));
        });
};


