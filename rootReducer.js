import { combineReducers } from 'redux'

import mainReducer from './redux/reducer/reducers'
import TealiumReducers from './tealiumTest/redux/reducer/tealiumReducers';
import retailToMailReducer from './retailToMail/redux/reducers/retailToMailReducer';

// Combine multiple reducers
export default combineReducers({
  counter: mainReducer,
  analytics: TealiumReducers,
  retailToMailContent: retailToMailReducer
})