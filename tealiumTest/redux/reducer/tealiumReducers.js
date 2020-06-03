import {
    ON_INCREMENT_ACTION_TYPE,
    ON_DECREMENT_ACTION_TYPE
} from '../../../redux/action/actions';

import {
    getDefaultTealiumState
} from '../TealiumState';


// Reusing the same actions from actions.js
export default function counter(state = getDefaultTealiumState(), action) {
    let defaultState = {...state, ...action.payload};
    switch (action.type) {
        case ON_INCREMENT_ACTION_TYPE:
            return defaultState;
        case 'INCREMENT_IF_ODD':
            return defaultState;
        case ON_DECREMENT_ACTION_TYPE:
            return defaultState;
        default:
            return defaultState;
  }
}