import { combineReducers } from 'redux';
import {
    APP_GETMOVINGLIST,
    APP_GETCURRENTPOSITION
} from 'client/state/types';

export function getMovingList(state = {}, action = {}) {

    switch (action.type) {
        case APP_GETMOVINGLIST:
            return action.items;
        default:
            return state;
    }
}

export function getCurrentPosition(state = "", action = {}) {
    switch (action.type) {
        case APP_GETCURRENTPOSITION:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    getMovingList: getMovingList,
    getCurrentPosition: getCurrentPosition
})