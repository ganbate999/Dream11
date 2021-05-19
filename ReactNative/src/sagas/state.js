import { takeLatest } from 'redux-saga/effects';
import { APP_STATE } from '../actions/actionsTypes';


const appHasComeBackToForeground = function* appHasComeBackToForeground() {

};

const appHasComeBackToBackground = function* appHasComeBackToBackground() {

};

const appHasInActive = function * appHasInActive(){

}


const root = function* root() {
	yield takeLatest(
		APP_STATE.FOREGROUND,
		appHasComeBackToForeground
	);
	yield takeLatest(
		APP_STATE.BACKGROUND,
		appHasComeBackToBackground
	);
	yield takeLatest(
		APP_STATE.INACTIVE,
		appHasInActive
	);
};

export default root;
