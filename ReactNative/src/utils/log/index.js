import firebaseAnalytics from '@react-native-firebase/analytics';
import events from './events';
import Bugsnag from "@bugsnag/react-native";

const analytics = firebaseAnalytics || '';
let crashlytics = require('@react-native-firebase/crashlytics').default;

export { analytics };
export { events };

let metadata = {};

export const logEvent = (eventName, payload) => {
	try {
		analytics().logEvent(eventName, payload);
		Bugsnag.leaveBreadcrumb(eventName, payload);
	} catch {
		// Do nothing
	}
};

export const setCurrentScreen = (currentScreen) => {
	analytics().logScreenView({
		screen_class: currentScreen,
		screen_name: currentScreen
	});
	Bugsnag.leaveBreadcrumb(currentScreen, { type: 'navigation' });
};

export default (e, message = null) => {
	if (e instanceof Error && e.message !== 'Aborted' && !__DEV__) {
		Bugsnag.notify(e, (report) => {
			report.metadata = {
				details: {
					...metadata
				}
			};
		});
		crashlytics().recordError(e);
	} else {
		console.log(message?message:'Error: ', e);
	}
};
