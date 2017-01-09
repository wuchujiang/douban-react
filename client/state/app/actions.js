import request from 'superagent';

import {
    APP_STATE
} from '../../state/types';

export function counter(num) {
    return (dispatch, getState) => {
        return dispatch({
            type: APP_STATE,
            items: num
        })
    }
}