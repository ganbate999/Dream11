import { isIOS, isAndroid } from '../utils/deviceInfo';

export const COLOR_DANGER = '#f5455c';
export const COLOR_BUTTON_PRIMARY = '#3f65b2';
export const COLOR_BUTTON_SECONDARY = '#C4CFD5';
export const COLOR_BUTTON_DEFAULT = '#EBEBEB';
export const COLOR_BUTTON_DANGER = '#F95522';
export const COLOR_BUTTON_WHITE = '#FFFFFF';
export const COLOR_BUTTON_GRAY = '#c7c7c7';
export const COLOR_BUTTON_DONE = '#3f65b2';
export const COLOR_BUTTON_FACEBOOK = '#3f65b2';
export const COLOR_BUTTON_GOOGLE = '#ce011b';
export const COLOR_BUTTON_APPLE_LIGHT = '#000000';
export const COLOR_BUTTON_APPLE_DARK = '#FFFFFF';
export const COLOR_BUTTON_APPLE_BLACK = '#FFFFFF';

export const COLOR_BUTTON_TEXT_PRIMARY = '#FFFFFF';
export const COLOR_BUTTON_TEXT_SECONDARY = '#FFFFFF';
export const COLOR_BUTTON_TEXT_DEFAULT = '#000000';
export const COLOR_BUTTON_TEXT_DANGER = '#FFFFFF';
export const COLOR_BUTTON_TEXT_WHITE = '#000000';
export const COLOR_BUTTON_TEXT_DONE = '#FFFFFF';
export const COLOR_BUTTON_TEXT_FACEBOOK = '#FFFFFF';
export const COLOR_BUTTON_TEXT_GOOGLE = '#FFFFFF';
export const COLOR_BUTTON_TEXT_APPLE_LIGHT = '#FFFFFF';
export const COLOR_BUTTON_TEXT_APPLE_DARK = '#000000';
export const COLOR_BUTTON_TEXT_APPLE_BLACK = '#000000';

export const COLOR_TEXT = '#292E35';
export const COLOR_SEPARATOR = '#CBCED1';
export const COLOR_SUCCESS = '#2de0a5';
export const COLOR_PRIMARY = '#1d74f5';
export const COLOR_WHITE = '#fff';
export const COLOR_TITLE = '#0C0D0F';
export const COLOR_TEXT_DESCRIPTION = '#9ca2a8';
export const COLOR_BACKGROUND_CONTAINER = '#f3f4f5';
export const COLOR_BACKGROUND_NOTIFICATION = '#f8f8f8';
export const COLOR_BORDER = '#e1e5e8';
export const COLOR_UNREAD = '#e1e5e8';
export const COLOR_TOAST = '#0C0D0F';
export const STATUS_COLORS = {
	online: '#2de0a5',
	busy: COLOR_DANGER,
	away: '#ffd21f',
	offline: '#cbced1'
};

export const HEADER_BACKGROUND = '#FFF';
export const HEADER_TITLE = '#FFF';
export const HEADER_BACK = '#FFF';

export const SWITCH_TRACK_COLOR = {
	false: isAndroid ? '#f5455c' : null,
	true: '#2de0a5'
};


const mentions = {
	unreadBackground: '#6C727A',
	tunreadBackground: '#1d74f5',
	mentionMeColor: '#DB0C27',
	mentionMeBackground: '#F5455C',
	mentionGroupColor: '#E26D0E',
	mentionGroupBackground: '#F38C39',
	mentionOtherColor: '#DFAC00'
};

export const themes = {
	light: {
		activeTintColor: '#f31333',
		backgroundColor: '#ffffff',
		focusedBackground: '#ffffff',
		componentBackground: '#f3f4f5',
		auxiliaryBackground: '#efeff4',
		avatarBackground: '#caced1',
		bannerBackground: '#f1f2f4',
		titleText: '#0d0e12',
		ownMsgText: '#f1f2f4',
		otherMsgText: '#0C0D0F',
		bodyText: '#0C0D0F',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#e1e5e8',
		controlText: '#54585e',
		auxiliaryText: '#9ca2a8',
		inactiveTintColor: '#9ca2a8',
		infoText: '#6d6d72',
		readText: '#404040',
		tintColor: '#1d74f5',
		auxiliaryTintColor: '#caced1',
		actionTintColor: '#1d74f5',
		separatorColor: '#cbcbcc',
		navbarBackground: '#ffffff',
		headerBorder: '#B2B2B2',
		headerBackground: '#f5405a',
		headerSecondaryBackground: '#EEEFF1',
		headerTintColor: '#ffffff',
		headerTitleColor: '#ffffff',
		headerSecondaryText: isAndroid ? '#9ca2a8' : '#1d74f5',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#ffffff',
		searchboxBackground: '#E6E6E7',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		messageOwnBackground: '#65a9dc',
		messageOtherBackground: '#f2f6f9',
		modalBackground: '#E6E6E7',
		...mentions
	},
	dark: {
		activeTintColor: '#FFFFFF',
		backgroundColor: '#030b1b',
		focusedBackground: '#0b182c',
		componentBackground: '#cbcdcf',
		auxiliaryBackground: '#07101e',
		avatarBackground: '#0b182c',
		bannerBackground: '#0e1f38',
		titleText: '#FFFFFF',
		ownMsgText: '#f1f2f4',
		otherMsgText: '#0d0d0d',
		bodyText: '#e8ebed',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#0f213d',
		controlText: '#dadde6',
		auxiliaryText: '#9297a2',
		inactiveTintColor: '#9297a2',
		infoText: '#6D6D72',
		readText: '#c0c0c0',
		tintColor: '#1d74f5',
		auxiliaryTintColor: '#cdcdcd',
		actionTintColor: '#1d74f5',
		separatorColor: '#2b2b2d',
		navbarBackground: '#0b182c',
		headerBorder: '#2F3A4B',
		headerBackground: '#0b182c',
		headerSecondaryBackground: '#0b182c',
		headerTintColor: '#ffffff',
		headerTitleColor: '#FFFFFF',
		headerSecondaryText: '#9297a2',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#0b182c',
		searchboxBackground: '#192d4d',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		messageOwnBackground: '#65a9dc',
		messageOtherBackground: '#b7babc',
		modalBackground: '#192d4d',
		...mentions
	},
	black: {
		activeTintColor: '#f9f9f9',
		backgroundColor: '#000000',
		focusedBackground: '#0d0d0d',
		componentBackground: '#cbcdcf',
		auxiliaryBackground: '#080808',
		avatarBackground: '#181b1d',
		bannerBackground: '#1f2329',
		titleText: '#f9f9f9',
		ownMsgText: '#f1f2f4',
		otherMsgText: '#0d0d0d',
		bodyText: '#e8ebed',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#1f2329',
		controlText: '#dadde6',
		auxiliaryText: '#b2b8c6',
		inactiveTintColor: '#b2b8c6',
		infoText: '#6d6d72',
		readText: '#c0c0c0',
		tintColor: '#1e9bfe',
		auxiliaryTintColor: '#cdcdcd',
		actionTintColor: '#1ea1fe',
		separatorColor: '#272728',
		navbarBackground: '#0d0d0d',
		headerBorder: '#323232',
		headerBackground: '#0d0d0d',
		headerSecondaryBackground: '#0d0d0d',
		headerTintColor: '#ffffff',
		headerTitleColor: '#ffffff',
		headerSecondaryText: '#b2b8c6',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#0d0d0d',
		searchboxBackground: '#1f1f1f',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		messageOwnBackground: '#65a9dc',
		messageOtherBackground: '#f2f6f9',
		modalBackground: '#192d4d',
		...mentions
	}
};
