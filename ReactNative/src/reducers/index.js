import { combineReducers } from 'redux';
import login from './login';
import app from './app';

export default combineReducers({
	login,
	app,
});
