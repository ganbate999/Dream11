import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Navigation from './lib/Navigation';
import { getActiveRouteName, navigationTheme } from './utils/navigation';
import {
	ROOT_LOADING,
	ROOT_INSIDE,
	ROOT_BACKGROUND,
	ROOT_AGREEMENT,
	ROOT_OUTSIDE
} from './actions/app';

// Stacks
import InsideStack from './stacks/InsideStack';
import OutSideStack from "./stacks/OutsideStack";
import { ThemeContext } from './theme';
import { setCurrentScreen } from './utils/log';

// App
const Stack = createStackNavigator();
const App = React.memo(({ root }) => {

	const { theme } = React.useContext(ThemeContext);
	const navTheme = navigationTheme(theme);

	React.useEffect(() => {
		const state = Navigation.navigationRef.current?.getRootState();
		const currentRouteName = getActiveRouteName(state);
		Navigation.routeNameRef.current = currentRouteName;
		setCurrentScreen(currentRouteName);
		console.log('rootName', currentRouteName);
	}, []);

	console.log('root', root);

	return (
		<NavigationContainer
			theme={navTheme}
			ref={Navigation.navigationRef}
			onStateChange={(state) => {
				const previousRouteName = Navigation.routeNameRef.current;
				const currentRouteName = getActiveRouteName(state);
				if (previousRouteName !== currentRouteName) {
					setCurrentScreen(currentRouteName);
				}
				Navigation.routeNameRef.current = currentRouteName;
			}}
		>
			<Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
				<>
					{root === null || root === ROOT_OUTSIDE  ? (
						<Stack.Screen
							name='OutSideStack'
							component={OutSideStack}
						/>
					) : null}
					{root === ROOT_INSIDE ? (
						<Stack.Screen
							name='InsideStack'
							component={InsideStack}
						/>
					) : null}
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
});
const mapStateToProps = state => ({
	root: state.app.root,
	isMasterDetail: state.app.isMasterDetail
});

App.propTypes = {
	root: PropTypes.string,
	isMasterDetail: PropTypes.bool
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
