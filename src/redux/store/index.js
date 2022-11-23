import getCryptoDataReducer from "../reducers/getCryptoDataReducer";
import {combineReducers, legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    getCryptoDataReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;


