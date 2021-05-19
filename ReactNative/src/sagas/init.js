import { takeLatest } from 'redux-saga/effects';
import RNBootSplash from 'react-native-bootsplash';

import { APP } from '../actions/actionsTypes';
import reduxStore from '../lib/createStore';
import {
	appStart,
	appReady,
	ROOT_OUTSIDE
} from '../actions/app';
import DreamSDK from "../lib/dreamsdk";
import UserPreferences from '../lib/userPreferences';
import log from '../utils/log';
import {loginRequest} from "../actions/login";

/**
 * ストレージから設定をリストアする
 * @yield {[type]} [description]
 */
const restore = function* restore() {
	try {

		let token= yield UserPreferences.getStringAsync(DreamSDK.TOKEN_KEY);

		if (token) {
			console.log('resume token', token);
			reduxStore.dispatch(loginRequest({resume: token}, false));
		}
	} catch (e) {
		log(e, 'store restore error:');
	}
	RNBootSplash.hide();
};

const start = function* start() {
	RNBootSplash.hide();
};

const root = function* root() {
	yield takeLatest(APP.INIT, restore);
	yield takeLatest(APP.START, start);
};
export default root;
