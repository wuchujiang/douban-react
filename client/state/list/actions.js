import request from 'superagent';

import {
    LIST_STATE,
    LIST_GETMOVING_INFO,
    LIST_SETSHOWMOREBUTTON_STATE,
    LIST_SETACTORITEM,
    LIST_CHECKACTORINFO
} from 'client/state/types';

export function counter(num) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_STATE,
            items: num
        })
    }
}

export function getMovingInfo(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_GETMOVING_INFO,
            items: res
        })
    }
}

export function setShowMoreButtonState(show) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_SETSHOWMOREBUTTON_STATE,
            items: show
        })
    }
}

export function setActorItem(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_SETACTORITEM,
            items: res
        })
    }
}

export function checkActorInfo(param = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_CHECKACTORINFO,
            items: param
        })
    }
}