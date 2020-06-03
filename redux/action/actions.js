import {Action} from 'redux';

export const ON_INCREMENT_ACTION_TYPE = 'INCREMENT';
export const ON_DECREMENT_ACTION_TYPE = 'DECREMENT';
export const FETCH_CONTENT_ACTION_TYPE = 'retailToMail/fetchRetailToMailPageContent';

export function onIncrementActionCreator(payload) {
	return { type: ON_INCREMENT_ACTION_TYPE, payload: payload };
}

export function onIncrementAction(action) {
	return action.type == ON_INCREMENT_ACTION_TYPE;
}

export function onDecrementActionCreator(payload) {
	return { type: ON_DECREMENT_ACTION_TYPE, payload: payload };
}

export function onDecrementAction(action) {
	return action.type == ON_DECREMENT_ACTION_TYPE;
}