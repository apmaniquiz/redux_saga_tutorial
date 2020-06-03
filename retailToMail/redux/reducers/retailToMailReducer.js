import { FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE } from '../../redux/actions/index';

import {
    getDefaultRetailToMailState
} from '../../RetailToMailState';

import {
    RetailToMailDataManager
} from '../../../common/components/RetailToMailDataManager/RetailToMailDataManager';

export default function retailToMailReducer(state = getDefaultRetailToMailState(), action) {
    let retailToMailState = {...state, ...action};
    RetailToMailDataManager(action.payload);
    switch (action.type) {
        case FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE:
            return retailToMailState;
        default:
            return retailToMailState;
  }
}