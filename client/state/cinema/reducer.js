import { combineReducers } from 'redux';
import {
    CINEMA_GETCINEMALIST,
    CINEMA_CURRENTPOSITION
} from 'client/state/types';


export function getCinemaList(state = "", action = {}) {
    switch (action.type) {
        case CINEMA_GETCINEMALIST:
            return action.items;
        default:
            return state;
    }
}

export function currentPosition(state = { city: "北京市", lat: "", lng: "", describe: "正在定位中", latitude: "", longitude: "" }, action = {}) {
    switch (action.type) {
        case CINEMA_CURRENTPOSITION:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    getCinemaList: getCinemaList,
    currentPosition: currentPosition
})