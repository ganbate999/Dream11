import { APP } from './actionsTypes';

export const ROOT_OUTSIDE = 'outside';
export const ROOT_INSIDE = 'inside';
export const ROOT_LOADING = 'loading';
export const ROOT_AGREEMENT = 'agreement';
export const ROOT_BACKGROUND = 'background';

export function appStart({ root, ...args }) {
	return {
		type: APP.START,
		root,
		...args
	};
}

export function appReady() {
	return {
		type: APP.READY
	};
}

export function appInit() {
	return {
		type: APP.INIT
	};
}
