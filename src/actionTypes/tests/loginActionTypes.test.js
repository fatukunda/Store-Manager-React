import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import fetchMock from 'fetch-mock'

import * as actions from "../loginActionTypes";
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "../../actions/loginActions";
import { loginUrl } from '../../routes/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login Actions", () => {
    it("should create an action for pending login", () => {
        const expectedAction = {
            type: LOGIN_PENDING,
            isLoginPending: false
        }
        expect(actions.loginPending(false)).toEqual(expectedAction);
    });
    it("should create login success action", () => {
        const user = {
            username: "testUser",
            password: "testPass"
        }
        const expectedAction = {
            type: LOGIN_SUCCESS,
            user
        }
        expect(actions.loginSuccess(user)).toEqual(expectedAction);
    }),
        it("should create login failure action", () => {
            const error = "error";
            const expectedAction = {
                type: LOGIN_ERROR,
                error
            }
            expect(actions.loginfailure(error)).toEqual(expectedAction);
        });
});

describe("login async", () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it("should successfully login the user", () => {
        const user = {
            username: "some username",
            password: "some pass"
        }
        fetchMock.postOnce(loginUrl, {
            body: user,
            headers: {
                "Content-Type": "application/json",
            }
        })
        const expectedAction = [
            {
                type: LOGIN_PENDING,
                isLoginPending: true
            },
            {
                type: LOGIN_SUCCESS,
                user,
            },
        ];
        const store = mockStore({ user: {} });
        return store.dispatch(actions.login("some username", "some password")).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})