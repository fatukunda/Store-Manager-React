import * as actions from '../actions/singleProductActions';
import axios from 'axios';
import { productsUrl } from '../routes/index'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTIxMzMyNTUsIm5iZiI6MTU1MjEzMzI1NSwianRpIjoiZTRlMWNjOTUtMTkyZi00NmYwLTgzMGMtMDRkODg1NmMyZWRiIiwiZXhwIjoxNTUyMTQwNDU1LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.ac3QDdKJP2mS48ZEDTZXNOsrLL9GdaWOEC1CrrIGNn0"
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

    const requestData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    dispatch(fetchSingleProductsPending(true));
    return axios(`${productsUrl}/${productId}`, requestData)
        .then((response) => {
            dispatch(fetchSingleProductsSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchSingleProductFailure(error.response.data));
        });
};


