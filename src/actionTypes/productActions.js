import * as actions from '../actions/productActions';
import axios from 'axios';
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

    const requestData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    dispatch(fetchProductsPending(true));
    return axios(productsUrl, requestData)
        .then((response) => {
            dispatch(fetchProductsSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchProductsFailure(error.response.data));
        });
};


