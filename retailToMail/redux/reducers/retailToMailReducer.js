import { FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE } from '../../redux/actions/index';

import {
    getDefaultRetailToMailState
} from '../../RetailToMailState';

import {
    RetailToMailDataManager
} from '../../../common/components/RetailToMailDataManager/RetailToMailDataManager';

export default function retailToMailReducer(state = getDefaultRetailToMailState(), action) {
    let retailToMailState = {...state, ...action};
    var retailToMailPageContent = RetailToMailDataManager(action.payload);
    
    switch (action.type) {
        case FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE:
            retailToMailState = {};
            retailToMailState = {
                ...retailToMailState,
                content: {
                    ...retailToMailPageContent
                }
            };
            return retailToMailState;
        default:
            return retailToMailState;
  }
}