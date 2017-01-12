import request from 'superagent';

import {
    APP_GETMOVINGLIST
} from 'client/state/types';
export function getMovingList() {
    return (dispatch, getState) => {
        return request.get("https://api.douban.com/v2/movie/in_theaters")
            .then(res => {
               dispatch({
                    type: APP_GETMOVINGLIST,
                    items: JSON.parse(res.text)
                });
           })
    }
}