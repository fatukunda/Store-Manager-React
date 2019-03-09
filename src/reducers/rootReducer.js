import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';

export default combineReducers({
    loginReducer,
    productsReducer,
    singleProductReducer
});