import request from 'superagent';

import {
    LIST_STATE,
    LIST_GETMOVING_INFO
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