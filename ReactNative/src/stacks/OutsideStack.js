import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../theme';
import {
	outsideHeader, themedHeader, ModalAnimation
} from '../utils/navigation';

// // SignupStack
import SignupView from '../screens/SignupView';
import RegisterView from "../screens/RegisterView";
import LoginView from "../screens/LoginView";
import ForgotPasswordView from "../screens/ForgotPasswordView";
import TermsOfServiceView from "../screens/TermsOfServiceView";


// OutsideStackModal
const OutSide = createStackNavigator();
const OutSideStack = () => {
	const { theme } = React.useContext(ThemeContext);

	return (
		<OutSide.Navigator mode='modal' screenOptions={{ ...outsideHeader, ...themedHeader(theme), ...ModalAnimation }}>
			<OutSide.Screen
				name='SignupView'
				component={SignupView}
				options={{ headerShown: false }}
			/>
			<OutSide.Screen
				name='LoginView'
				component={LoginView}
				options={{ headerShown: false }}
			/>
			<OutSide.Screen
				name='RegisterView'
				component={RegisterView}
				options={{ headerShown: false }}
			/>
			<OutSide.Screen
				name='ForgotPasswordView'
				component={ForgotPasswordView}
				options={{ headerShown: false }}
			/>
			<OutSide.Screen
				name='TermsOfServiceView'
				component={TermsOfServiceView}
				options={{ headerShown: false }}
			/>
		</OutSide.Navigator>
	);
};

export default OutSideStack;
