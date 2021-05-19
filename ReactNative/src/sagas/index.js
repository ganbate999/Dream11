import { all } from 'redux-saga/effects';
import login from './login';
import init from './init';
import state from './state';

const root = function* root() {
	yield all([
		init(),
		login(),
		state(),
	]);
};

export default root;
