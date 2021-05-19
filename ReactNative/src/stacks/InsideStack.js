import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";

import { ThemeContext } from '../theme';
import { defaultHeader, themedHeader, ModalAnimation, StackAnimation } from '../utils/navigation';
import Sidebar from '../screens/SidebarView';
import {themes} from "../constants/colors";
import MatchesView from "../screens/MatchesView";
import GroupsView from "../screens/GroupsView";
import FeedView from "../screens/FeedView";
import HomeView from "../screens/HomeView";
import ChatRoomView from "../screens/ChatRoomView";
import CreateNewGroupView from "../screens/CreateNewGroupView";
import ContestView from "../screens/ContestView";
import ContestDetailView from "../screens/ContestDetailView";


const HomeNav = createStackNavigator();
const HomeStack = () => {
	const {theme} = React.useContext(ThemeContext);
	return (
		<HomeNav.Navigator screenOptions={{ ...defaultHeader, ...themedHeader(theme) }}>
			<HomeNav.Screen
				name='HomeView'
				component={HomeView}
				options={HomeView.navigationOptions}
			/>
		</HomeNav.Navigator>
	);
};


const MatchesNav = createStackNavigator();
const MatchesStack = () => {
	const {theme} = React.useContext(ThemeContext);
	return (
		<MatchesNav.Navigator screenOptions={{...defaultHeader, ...themedHeader(theme)}}>
			<MatchesNav.Screen
				name='MatchesView'
				component={MatchesView}
				options={MatchesView.navigationOptions}
			/>
		</MatchesNav.Navigator>
	);
};

const GroupsNav = createStackNavigator();
const GroupsStack = () => {
	const {theme} = React.useContext(ThemeContext);
	return (
		<GroupsNav.Navigator screenOptions={{...defaultHeader, ...themedHeader(theme)}}>
			<GroupsNav.Screen
				name='GroupsView'
				component={GroupsView}
				options={GroupsView.navigationOptions}

			/>
		</GroupsNav.Navigator>
	);
};

const Feed = createStackNavigator();
const FeedStack = () => {
	const { theme } = React.useContext(ThemeContext);
	return (
		<Feed.Navigator screenOptions={ { ...defaultHeader, ...themedHeader(theme) } }>
			<Feed.Screen
				name='FeedView'
				component={ FeedView }
				options={ FeedView.navigationOptions }
			/>
		</Feed.Navigator>
	);
};

// Tab
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
	const { theme } = React.useContext(ThemeContext);
	return (
		<Tab.Navigator
			initialRouteName="HomeStack"
			resetOnBlur={true}
			tabBarOptions={{
				activeTintColor: themes[theme].activeTintColor,
				inactiveTintColor: themes[theme].inactiveTintColor,
			}}
		>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({color, size, focused}) => (
						focused
							? <Ionicons style={{ color: themes[theme].activeTintColor}} size={24} name={'home'} />
							: <Ionicons style={{ color: themes[theme].inactiveTintColor}} size={24} name={'home-outline'} />
					),
				}}
			/>
			<Tab.Screen
				name="MatchesStack"
				component={MatchesStack}
				options={{
					tabBarLabel: 'My Matches',
					tabBarIcon: ({color, size, focused}) => (
						focused
							? <Ionicons style={{ color: themes[theme].activeTintColor}} size={24} name={'medal'}/>
							: <Ionicons style={{ color: themes[theme].inactiveTintColor}} size={24} name={'medal-outline'} />
					),
				}}
			/>
			<Tab.Screen
				name="GroupsStack"
				component={GroupsStack}
				options={{
					tabBarLabel: 'Groups',
					tabBarIcon: ({color, size, focused}) => (
						focused
							? <Ionicons style={{ color: themes[theme].activeTintColor}} size={24} name={'ios-chatbox-ellipses'} />
							: <Ionicons style={{ color: themes[theme].inactiveTintColor}} size={24} name={'ios-chatbox-ellipses-outline'} />
					),
				}}
			/>
			<Tab.Screen
				name="FeedStack"
				component={FeedStack}
				options={{
					tabBarLabel: 'Feed',
					tabBarIcon: ({color, size, focused}) => (
						focused
							? <Ionicons style={{ color: themes[theme].activeTintColor}} size={24} name={'md-receipt'}/>
							: <Ionicons style={{ color: themes[theme].inactiveTintColor}} size={24} name={'md-receipt-outline'} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

// ChatsStackNavigator
const Tabs = createStackNavigator();
const TabsStack = () => {
	const { theme } = React.useContext(ThemeContext);
	return (
		<Tabs.Navigator screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
			<Tabs.Screen
				name='TabHome'
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Tabs.Screen
				name='ChatRoomView'
				component={ChatRoomView}
			/>
			<Tabs.Screen
				name='CreateNewGroupView'
				component={CreateNewGroupView}
				options={CreateNewGroupView.navigationOptions}
			/>
			<Tabs.Screen
				name='ContestView'
				component={ContestView}
			/>
			<Tabs.Screen
				name='ContestDetailView'
				component={ContestDetailView}
			/>
		</Tabs.Navigator>
	);
};

// DrawerNavigator
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
	<Drawer.Navigator
		drawerContent={({ navigation, state }) => <Sidebar navigation={navigation} state={state} />}
		screenOptions={{ swipeEnabled: false }}
		drawerType='back'
	>
		<Drawer.Screen name='ChatsStack' component={TabsStack} />
	</Drawer.Navigator>
);

// InsideStackNavigator
const InsideStack = createStackNavigator();
const InsideStackNavigator = () => {
	const { theme } = React.useContext(ThemeContext);

	return (
		<InsideStack.Navigator mode='modal' screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...ModalAnimation }}>
			<InsideStack.Screen
				name='DrawerNavigator'
				component={DrawerNavigator}
				options={{ headerShown: false }}
			/>
		</InsideStack.Navigator>
	);
};

export default InsideStackNavigator;
