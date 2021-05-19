const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const defaultTypes = [REQUEST, SUCCESS, FAILURE];
function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN', [
	...defaultTypes,
	'RESET',
]);
export const LOGOUT = 'LOGOUT';

export const APP = createRequestTypes('APP', ['START', 'READY', 'INIT', 'INIT_LOCAL_SETTINGS', 'SET_MASTER_DETAIL']);

export const APP_STATE = createRequestTypes('APP_STATE', ['FOREGROUND', 'BACKGROUND', 'INACTIVE']);

export const USER = createRequestTypes('USER', ['SET']);
