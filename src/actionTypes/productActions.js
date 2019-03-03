import * as actions from '../actions/productActions';
import axios from 'axios';
import { productsUrl } from '../routes/index'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTE2MjIxMjAsIm5iZiI6MTU1MTYyMjEyMCwianRpIjoiMmUxY2E2YzktYmRiMy00MzEwLThkODMtODhiYWMwYTdiY2EwIiwiZXhwIjoxNTUxNjI5MzIwLCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.GovbJ_FuKukw72xDG7objNWQmic1HGAZBdf6CtSnwxw"
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
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
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


