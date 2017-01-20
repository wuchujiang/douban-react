import { combineReducers } from 'redux';
import {
    CINEMA_GETCINEMALIST
} from 'client/state/types';


export function getCinemaList(state = "", action = {}) {
    switch (action.type) {
        case CINEMA_GETCINEMALIST:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    getCinemaList: getCinemaList
})