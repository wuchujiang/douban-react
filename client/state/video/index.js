/**
 * Created by wuchujiang on 17/01/09
 */

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import video from './reducer';
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware);

let reducer = combineReducers({
    video: function (state = {}, action = {}) {
        return {}
    }
});

export default function createReduxStore(initialState = {}) {
    return createStoreWithMiddleware(createStore)(reducer, initialState);
}