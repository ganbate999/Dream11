import React from 'react';
import PropTypes from 'prop-types';
import {
	ScrollView, StyleSheet, Image, TouchableOpacity, Text, View
} from 'react-native';

import KeyboardView from '../components/KeyboardView';
import sharedStyles from './Styles';
import scrollPersistTaps from '../utils/scrollPersistTaps';
import StatusBar from '../components/StatusBar';
import {withTheme} from "../theme";
import {themes} from "../constants/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	imageBackground: {
		position: 'absolute',
		flex:1
	},
	backNavButton: {
		backgroundColor: 'transparent',
		borderBottomWidth: 0.001,
		margin: 10,
		width: 12,
		height: 24,
		tintColor: 'white'
	},
	headerView:
	{
		width: 32
	},
	loginTitle: {
		marginVertical: 0,
		marginTop: 15
	},
	termsText: {

	},
	imageView: {
		alignItems: 'center'
	},
	ressistaText: {
		fontSize: 14,
		fontWeight: '500',
		width: '85%',
		lineHeight: 16,
		textAlign: 'center'
	},
	headingText: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: Platform.OS === 'ios' ? '7%' : '4%',
	},
	imageStyles: {
		height: '40%',
		width: '55%',
		resizeMode: 'contain',
	},
	textContainer:
	{
		backgroundColor: 'white',
		borderRadius: 8,
		marginHorizontal: 12,
		marginVertical: 24,
		flexGrow: 1
	},
});

class TermsOfServiceView extends React.Component {

	static propTypes = {
		navigation: PropTypes.object,
		theme: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			terms: 'Terms Text',
		};
	}

	render() {
		const { theme } = this.props;
		const { terms } = this.state;
		return (
			<KeyboardView contentContainerStyle={sharedStyles.container} keyboardVerticalOffset={128} key='login-view'>
				<Image source={require('../assets/onboard.png')} style={styles.imageBackground} />
				<StatusBar />
				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
					<Image source={require('../assets/ic_back.png')} style={styles.backNavButton} />
				</TouchableOpacity>
				<View style={styles.container}>
					<View style={styles.imageView}>
						<Text style={{ ...styles.headingText, color: themes[theme].backgroundColor }}>TERMS AND CONDITIONS</Text>
					</View>
					<ScrollView {...scrollPersistTaps} contentContainerStyle={{ ...sharedStyles.containerScrollView, ...styles.textContainer}}>
						<Text style={styles.termsText}>{terms}</Text>
					</ScrollView>
				</View>
			</KeyboardView>
		);
	}
}

export default withTheme(TermsOfServiceView);
