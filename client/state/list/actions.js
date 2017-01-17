import request from 'superagent';

import {
    LIST_STATE,
    LIST_GETMOVING_INFO,
    LIST_SETSHOWMOREBUTTON_STATE,
    LIST_SETACTORITEM,
    LIST_CHECKACTORINFO,
    LIST_HASREADMOVE,
    LIST_SCORECOUNTER
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

export function hasReadMove(param) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_HASREADMOVE,
            items: param
        })
    }
}

export function scoreCounter(param = {}) {
    return (dispatch, getState) => {
        let oldParam = getState().list.scoreCounter;
        let newParam = _.assign(oldParam, param);
        return dispatch({
            type: LIST_SCORECOUNTER,
            items: {
                show: newParam.show,
                score: newParam.score,
                describe: newParam.describe
            }
        })
    }
}