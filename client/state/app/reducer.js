import { combineReducers } from 'redux';
import { APP_GETMOVINGLIST } from 'client/state/types';

export function getMovingList(state = {}, action = {}) {

    switch (action.type) {
        case APP_GETMOVINGLIST:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    getMovingList: getMovingList
})