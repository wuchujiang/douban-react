/**
 * Created by wuchujiang on 17/01/09
 */

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import tarBar from './reducer';
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware);

let reducer = combineReducers({
    tarBar: function (state = {}, action = {}) {
        return {}
    }
});

export default function createReduxStore(initialState = {}) {
    return createStoreWithMiddleware(createStore)(reducer, initialState);
}