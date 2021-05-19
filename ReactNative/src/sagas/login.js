import {
	put, takeLatest, call
} from 'redux-saga/effects';
import * as types from '../actions/actionsTypes';
import DreamSDK from '../lib/dreamsdk';
import UserPreferences from '../lib/userPreferences';
import log from '../utils/log';
import {appStart, ROOT_INSIDE, ROOT_OUTSIDE} from "../actions/app";
import {loginFailure, loginSuccess, setUser} from "../actions/login";

const loginWithPasswordCall = args => DreamSDK.loginWithPassword(args);
const loginCall = args => DreamSDK.login(args);

const handleLoginRequest = function* handleLoginRequest({ credentials, logoutOnError = false }) {
	try {
		console.log('resume token', credentials);
		let result;
		if (credentials.resume) {
			result = yield call(loginCall, credentials);
		} else {
			result = yield call(loginWithPasswordCall, credentials);
		}
		yield put(loginSuccess({ user: result }));
	} catch (e) {
		log(e, 'handleLoginRequest Error:');
		yield put(loginFailure(e));
	}
};


const handleLoginSuccess = function* handleLoginSuccess({ data }) {
	try{
		const { user } = data;
		yield UserPreferences.setStringAsync(DreamSDK.TOKEN_KEY, user.token);
		yield put(setUser(user));
		yield put(appStart({root:ROOT_INSIDE}));
	} catch (e) {
		log(e, 'loginSuccess Error: ');
	}
};

const handleLogout = function* handleLogout({ }) {
	try{
		yield put(appStart({root : ROOT_OUTSIDE}));
	} catch (e) {
		log(e);
	}
};


const root = function* root() {
	yield takeLatest(types.LOGIN.SUCCESS, handleLoginSuccess);
	yield takeLatest(types.LOGIN.REQUEST, handleLoginRequest);
	yield takeLatest(types.LOGOUT, handleLogout);
};
export default root;
