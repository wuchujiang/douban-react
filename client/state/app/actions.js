import request from 'superagent';
import _ from "lodash";

import {
    APP_GETMOVINGLIST,
    APP_GETCURRENTPOSITION
} from 'client/state/types';
export function getMovingList(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: APP_GETMOVINGLIST,
            items: res
        });
    }
}

export function getCurrentPosition(param = {}) {
    return (dispatch, getState) => {
        let oldParam = getState().app.getCurrentPosition;
        let newParam = _.assign(oldParam, param)
        return dispatch({
            type: APP_GETCURRENTPOSITION,
            items: newParam
        })
    }
}
