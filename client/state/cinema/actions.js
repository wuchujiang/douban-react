import request from 'superagent';
import _ from "lodash";

import {
    CINEMA_GETCINEMALIST
} from 'client/state/types';
export function getCinemaList(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: CINEMA_GETCINEMALIST,
            items: res
        });
    }
}

