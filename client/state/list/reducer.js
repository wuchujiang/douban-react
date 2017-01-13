import {combineReducers} from 'redux';
import {
    LIST_STATE,
    LIST_GETMOVING_INFO
} from '../../state/types';

export function counter(state = 1, action = {}) {
    switch (action.type) {
        case LIST_STATE:
            return action.items;
        default:
            return state;
    }
}

export function getMovingInfo(state = {}, action = {}) {
    switch (action.type) {
        case LIST_GETMOVING_INFO:
            return action.items;
        default:
            return state;    
    }
}

export default combineReducers({
    counter: counter,
    getMovingInfo: getMovingInfo
})