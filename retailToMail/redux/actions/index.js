import {Action} from 'redux';
import Axios from 'axios';

import MockFile from '../../../mockJson/retailToMail.json';

import { all, call, delay, put, takeEvery, takeLeading } from 'redux-saga/effects'

export const FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE = 'retailToMail/fetchRetailToMailPageContent';

// export function fetchRetailToMailActionCreator(payload) {
// 	return { type: FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE, payload: payload };
// }

export function fetchRetailToMailAction(payload) {
	return action.type == FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE;
}

export function fetchRetailToMailActionCreator() {
	// Add mock url here
	const retailToMailPageContent = Axios.get('../../../mockJson/retailToMail.json').then(function(resp) {
		
		console.log('fetchRetailToMailPageContent ----- retailToMailPageContent ', resp);
	});

	return {
		type: FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE,
		payload: MockFile.response.data
	};

	// return retailToMailPageContent.data;
}

// export function* fetchRetailToMailPageContentFlow() {
// 	console.log('fetchRetailToMailPageContentFlow START -----');
// 	const products = yield call(fetchRetailToMailPageContent);
// 	console.log('fetchRetailToMailPageContentFlow END ----- ', products);
// 	// create and yield a dispatch Effect
// 	yield put({ type: FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE, products });
// };

// export function* retailToMailFlow() {
// 	console.log('retailToMailFlow START START START ------');
// 	yield takeLeading(FETCH_RETAIL_TO_MAIL_CONTENT_ACTION_TYPE, fetchRetailToMailPageContentFlow);
// }