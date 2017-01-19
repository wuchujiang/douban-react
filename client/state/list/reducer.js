import { combineReducers } from 'redux';
import {
    LIST_STATE,
    LIST_GETMOVING_INFO,
    LIST_SETSHOWMOREBUTTON_STATE,
    LIST_SETACTORITEM,
    LIST_CHECKACTORINFO,
    LIST_HASREADMOVE,
    LIST_SCORECOUNTER,
    LIST_MOVEPHOTOS
} from 'client/state/types';

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

export function setShowMoreButtonState(state = false, action = {}) {
    switch (action.type) {
        case LIST_SETSHOWMOREBUTTON_STATE:
            return action.items;
        default:
            return state;
    }
}

export function setActorItem(state = {}, action = {}) {
    switch (action.type) {
        case LIST_SETACTORITEM:
            return action.items;
        default:
            return state;
    }
}

export function checkActorInfo(state = {}, action = {}) {
    switch (action.type) {
        case LIST_CHECKACTORINFO:
            return action.items;
        default:
            return state;
    }
}

export function hasReadMove(state = 1, action = {}) {
    switch (action.type) {
        case LIST_HASREADMOVE:
            return action.items;
        default:
            return state;
    }
}

export function scoreCounter(state = { show: false, score: 0, describe: "请滑动星星评分" }, action = {}) {
    switch (action.type) {
        case LIST_SCORECOUNTER:
            return action.items;
        default:
            return state;
    }
}

export function moviePhoto(state = {}, action = {}) {
    switch (action.type) {
        case LIST_MOVEPHOTOS:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    counter: counter,
    getMovingInfo: getMovingInfo,
    setShowMoreButtonState: setShowMoreButtonState,
    setActorItem: setActorItem,
    checkActorInfo: checkActorInfo,
    hasReadMove: hasReadMove,
    scoreCounter: scoreCounter,
    moviePhoto: moviePhoto
})

