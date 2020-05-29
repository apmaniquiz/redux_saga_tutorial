import { combineReducers } from 'redux'

import mainReducer from './reducers'
import TealiumReducers from './tealiumTest/redux/reducer/tealiumReducers';

// Combine multiple reducers
export default combineReducers({
  counter: mainReducer,
  analytics: TealiumReducers
})