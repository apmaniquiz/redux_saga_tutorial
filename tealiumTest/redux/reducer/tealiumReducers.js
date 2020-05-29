import {
    ON_INCREMENT_ACTION_TYPE,
    ON_DECREMENT_ACTION_TYPE
} from '../../../actions';

import {
    getDefaultTealiumState
} from '../TealiumState';


// Reusing the same actions from actions.js
export default function counter(state = getDefaultTealiumState(), action) {
    switch (action.type) {
        case ON_INCREMENT_ACTION_TYPE:
            return state;
        case 'INCREMENT_IF_ODD':
            return state
        case ON_DECREMENT_ACTION_TYPE:
            return state
        default:
            return state
  }
}