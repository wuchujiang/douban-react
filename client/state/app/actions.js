import request from 'superagent';

import {
    APP_GETMOVINGLIST
} from 'client/state/types';
export function getMovingList(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: APP_GETMOVINGLIST,
            items: res
        });
    }
}