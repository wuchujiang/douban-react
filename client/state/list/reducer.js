import { combineReducers } from 'redux';
import { LIST_STATE } from '../../state/types';

export function counter(state = 1, action = {}) {
    switch (action.type) {
        case LIST_STATE:
            return action.items;
        default:
            return state;
    }
}

export default combineReducers({
    counter: counter
})