import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import fetchMock from 'fetch-mock'

import * as actions from "../productActions";
import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "../../actions/productActions";
import { productsUrl } from '../../routes/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Product Actions", () => {
    it("should create an action for pending fetch products", () => {
        const expectedAction = {
            type: FETCH_PRODUCTS_PENDING,
            isfetchProductsPending: false
        }
        expect(actions.fetchProductsPending(false)).toEqual(expectedAction);
    });
    it("should create fetch products success action", () => {
        const products = [{
            name: "some product name",
            unit_price: 2000
        }]
        const expectedAction = {
            type: FETCH_PRODUCTS_SUCCESS,
            products
        }
        expect(actions.fetchProductsSuccess(products)).toEqual(expectedAction);
    }),
        it("should create fetch products failure action", () => {
            const error = "error";
            const expectedAction = {
                type: FETCH_PRODUCTS_ERROR,
                error
            }
            expect(actions.fetchProductsFailure(error)).toEqual(expectedAction);
        });
});

describe("Products async", () => {
    afterEach(() => {
        fetchMock.restore()
        localStorage.clear()
    });
    it("should successfully fetch all the products", () => {
        const token = "some token"
        localStorage.setItem("auth_token", token)
        fetchMock.getOnce(productsUrl, {
            body: [],
            headers:
            {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
            },

        })
        const expectedAction = [
            {
                type: FETCH_PRODUCTS_PENDING,
                isfetchProductsPending: true
            },
            {
                type: FETCH_PRODUCTS_SUCCESS,
                products: []
            },
        ];
        const store = mockStore({ products: [] });
        return store.dispatch(actions.fetchProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})