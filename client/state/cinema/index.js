/**
 * Created by wuchujiang on 17/01/09
 */

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import cinema from './reducer';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware);

let reducer = combineReducers({
    cinema
});

export default function createReduxStore(initialState = {}) {
    return createStoreWithMiddleware(createStore)(reducer, initialState);
}