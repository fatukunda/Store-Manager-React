import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import fetchMock from 'fetch-mock'

import * as actions from "../singleProductActionTypes";
import {
    FETCH_SINGLE_PRODUCT_PENDING,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_ERROR
} from "../../actions/singleProductActions";
import { productsUrl } from '../../routes/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Single product Actions", () => {
    it("should create an action for pending fetch single product", () => {
        const expectedAction = {
            type: FETCH_SINGLE_PRODUCT_PENDING,
            isfetchSingleProductPending: false
        }
        expect(actions.fetchSingleProductsPending(false)).toEqual(expectedAction);
    });
    it("should create fetch single product success action", () => {
        const product = {
            name: "some product name",
            unit_price: 2000
        }
        const expectedAction = {
            type: FETCH_SINGLE_PRODUCT_SUCCESS,
            product
        }
        expect(actions.fetchSingleProductsSuccess(product)).toEqual(expectedAction);
    }),
        it("should create fetch single product failure action", () => {
            const error = "error";
            const expectedAction = {
                type: FETCH_SINGLE_PRODUCT_ERROR,
                error
            }
            expect(actions.fetchSingleProductFailure(error)).toEqual(expectedAction);
        });
});

describe("Single product async", () => {
    afterEach(() => {
        fetchMock.restore()
        localStorage.clear()
    });
    it("should successfully fetch a single product", () => {
        const token = "some token"
        localStorage.setItem("auth_token", token)
        fetchMock.getOnce(`${productsUrl}/${1}`, {
            body: {
                id: 1,
                name: "some product"
            },
            headers:
            {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
            },

        })
        const expectedAction = [
            {
                type: FETCH_SINGLE_PRODUCT_PENDING,
                isfetchSingleProductPending: true
            },
            {
                type: FETCH_SINGLE_PRODUCT_SUCCESS,
                product: { id: 1, name: 'some product' }
            },
        ];
        const store = mockStore({ product: {} });
        return store.dispatch(actions.fetchSingleProduct(1)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})