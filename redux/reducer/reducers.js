import {
    ON_INCREMENT_ACTION_TYPE,
    ON_DECREMENT_ACTION_TYPE
} from '../../redux/action/actions';

export default function counter(state = 0, action) {
    switch (action.type) {
        case ON_INCREMENT_ACTION_TYPE:
            return state + action.payload.count;
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + action.payload.count : state
        case ON_DECREMENT_ACTION_TYPE:
            return state - action.payload.count
        default:
            return state
  }
}
