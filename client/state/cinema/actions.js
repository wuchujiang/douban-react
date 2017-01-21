import request from 'superagent';
import _ from "lodash";

import {
    CINEMA_GETCINEMALIST,
    CINEMA_CURRENTPOSITION
} from 'client/state/types';
export function getCinemaList(res = {}) {
    return (dispatch, getState) => {
        return dispatch({
            type: CINEMA_GETCINEMALIST,
            items: res
        });
    }
}

export function currentPosition(param) {
    return (dispatch, getState) => {
        let oldParam = getState().cinema.currentPosition;
        let newParam = _.assign(oldParam, param)
        return dispatch({
            type: CINEMA_CURRENTPOSITION,
            items: {
                city: newParam.city,
                describe: newParam.describe,
                lat: newParam.lat,
                lng: newParam.lng,
                latitude: newParam.latitude,
                longitude: newParam.longitude
            }
        });
    }
}