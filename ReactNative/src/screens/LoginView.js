import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, ScrollView, View, StyleSheet, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import KeyboardView from '../components/KeyboardView';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import sharedStyles from './Styles';
import scrollPersistTaps from '../utils/scrollPersistTaps';
import { loginRequest as loginRequestAction } from '../actions/login';
import { loginReset as loginResetAction } from '../actions/login';
import StatusBar from '../components/StatusBar';
import { logEvent, events } from '../utils/log';
import {KeyboardUtils} from "react-native-keyboard-input";
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
	}
});

class LoginView extends React.Component {
	static propTypes = {
		navigation: PropTypes.object,
		loginRequest: PropTypes.func.isRequired,
		loginReset: PropTypes.func.isRequired,
		error: PropTypes.object,
		isFetching: PropTypes.bool,
		theme: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			showTOTP: false
		};
	}

	valid = () => {
		const {
			user, password
		} = this.state;
		return user.trim() && password.trim();
	}

	submit = () => {
		if (!this.valid()) {
			return;
		}

		const { user, password } = this.state;
		const { loginRequest } = this.props;
		KeyboardUtils.dismiss();
		loginRequest({ user, password });
		logEvent(events.LOGIN_DEFAULT_LOGIN, { user, password });
	}

	forgotPassword = () => {
		const { navigation } = this.props;
		navigation.navigate('ForgotPasswordView');
	}

	renderUserForm = () => {
		const {
			isFetching, theme
		} = this.props;
		return (
			<View style={sharedStyles.container} testID='login-view'>
				<Text style={{ ...sharedStyles.loginTitle, ...sharedStyles.textBold, color: themes[theme].backgroundColor }}>{'Login with Email'}</Text>
				<TextInput
					inputRef={(e) => { this.usernameInput = e; }}
					placeholder={'Email'}
					keyboardType='email-address'
					returnKeyType='next'
					iconLeft='at'
					onChangeText={value => this.setState({ user: value })}
					onSubmitEditing={() => { this.passwordInput.focus(); }}
					testID='login-view-email'
					blurOnSubmit={false}
					theme={theme}
				/>
				<TextInput
					inputRef={(e) => { this.passwordInput = e; }}
					placeholder={'Password'}
					returnKeyType='send'
					iconLeft='key'
					secureTextEntry
					onSubmitEditing={this.submit}
					onChangeText={value => this.setState({ password: value })}
					testID='login-view-password'
					containerStyle={sharedStyles.inputLastChild}
					theme={theme}
				/>
				<Button
					title={'Login'}
					type='primary'
					size='z'
					onPress={this.submit}
					testID='login-view-submit'
					loading={isFetching}
					disabled={!this.valid()}
					theme={theme}
				/>
				<View style={sharedStyles.bottomText}>
					<Text style={{ color: themes[theme].bodyText, textDecorationLine: 'underline' }} onPress={this.forgotPassword}>{'Forgot password?'}</Text>
				</View>
			</View>
		);
	}

	render() {
		const { theme } = this.props;
		return (
			<KeyboardView contentContainerStyle={sharedStyles.container} keyboardVerticalOffset={128} key='login-view'>
				<Image source={require('../assets/onboard.png')} style={styles.imageBackground} />
				<StatusBar />
				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
					<Image source={require('../assets/ic_back.png')} style={styles.backNavButton} />
				</TouchableOpacity>
				<ScrollView {...scrollPersistTaps} contentContainerStyle={sharedStyles.containerScrollView}>
					{this.renderUserForm()}
				</ScrollView>
			</KeyboardView>
		);
	}
}


const mapStateToProps = state => ({
	isFetching: state.login.isFetching,
	error: state.login.error && state.login.error.data,
});

const mapDispatchToProps = dispatch => ({
	loginRequest: params => dispatch(loginRequestAction(params)),
	loginReset : () => dispatch(loginResetAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(LoginView));
