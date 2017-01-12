import request from 'superagent';

import {
    LIST_STATE
} from 'client/state/types';

export function counter(num) {
    return (dispatch, getState) => {
        return dispatch({
            type: LIST_STATE,
            items: num
        })
    }
}