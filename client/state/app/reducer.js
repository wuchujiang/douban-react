import { combineReducers } from 'redux';
import { APP_STATE } from '../../state/types';

export function counter(state = 1, action = {}) {
    switch (action.type) {
        case APP_STATE:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    counter: counter
})