import * as actions from '../actions/productActions';
import axios from 'axios';
import { productsUrl } from '../routes/index'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTIxMjU4NjYsIm5iZiI6MTU1MjEyNTg2NiwianRpIjoiNmYxMTE0NDQtNmZlZC00OWY2LWE5YWUtMmVmNDJkYmVhZjhjIiwiZXhwIjoxNTUyMTMzMDY2LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.0PvoW_k8PytgCCLEMnLdpKHO4xKX1f9m-u07p79Y85k"
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


