import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import KeyboardView from '../components/KeyboardView';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import sharedStyles from './Styles';
import { showErrorAlert } from '../utils/info';
import isValidEmail from '../utils/isValidEmail';
import scrollPersistTaps from '../utils/scrollPersistTaps';
import StatusBar from '../components/StatusBar';
import {withTheme} from "../theme";
import {themes} from "../constants/colors";

const styles = StyleSheet.create({
	imageBackground: {
		position: 'absolute',
		flex: 1
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
});

class ForgotPasswordView extends React.Component {
	static propTypes = {
		navigation: PropTypes.object,
		theme: PropTypes.string
	}

	state = {
		email: '',
		invalidEmail: true,
		isFetching: false
	}

	componentDidMount() {
		this.timeout = setTimeout(() => {
			this.emailInput.focus();
		}, 600);
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { email, invalidEmail, isFetching } = this.state;
		const { theme } = this.props;
		if (nextState.email !== email) {
			return true;
		}
		if (nextState.invalidEmail !== invalidEmail) {
			return true;
		}
		if (nextState.isFetching !== isFetching) {
			return true;
		}
		return nextProps.theme !== theme;
	}

	componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	validate = (email) => {
		if (!isValidEmail(email)) {
			this.setState({ invalidEmail: true });
			return;
		}
		this.setState({ email, invalidEmail: false });
	}

	resetPassword = async() => {
		const { email, invalidEmail } = this.state;
		if (invalidEmail || !email) {
			return;
		}
		try {
			this.setState({ isFetching: true });
			// const result = await RocketChat.forgotPassword(email);
			// if (result.success) {
				const { navigation } = this.props;
				navigation.pop();
				showErrorAlert('Forgot password If this email is registered', 'Alert');
			// }
		} catch (e) {
			const msg = (e.data && e.data.error) || 'There was an error while action';
			showErrorAlert(msg, 'Alert');
		}
		this.setState({ isFetching: false });
	}

	render() {
		const { invalidEmail, isFetching } = this.state;
		const { theme } = this.props;

		return (
			<KeyboardView
				contentContainerStyle={{ ...sharedStyles.container, backgroundColor: themes[theme].backgroundColor }}
				keyboardVerticalOffset={128}
			>
				<Image source={require('../assets/onboard.png')} style={styles.imageBackground} />
				<StatusBar />
				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
					<Image source={require('../assets/ic_back.png')} style={styles.backNavButton} />
				</TouchableOpacity>
				<ScrollView {...scrollPersistTaps} contentContainerStyle={sharedStyles.containerScrollView}>
					<Text style={{ ...sharedStyles.loginTitle, ...sharedStyles.textBold, color: themes[theme].backgroundColor }}>{'Reset Password'}</Text>
					<Text style={{ ...sharedStyles.descriptionText, color: themes[theme].backgroundColor }}>{'Please enter the email address you used when registering.A password reset URL will be sent to your registered email address.'}</Text>
					<TextInput
						inputRef={(e) => { this.emailInput = e; }}
						placeholder={'Email'}
						keyboardType='email-address'
						iconLeft='mail'
						returnKeyType='send'
						onChangeText={email => this.validate(email)}
						onSubmitEditing={this.resetPassword}
						testID='forgot-password-view-email'
						containerStyle={sharedStyles.inputLastChild}
						theme={theme}
					/>
					<View style={{ alignItems: 'center' }}>
						<Button
							title={'Reset Password'}
							type='done'
							size='W'
							onPress={this.resetPassword}
							testID='forgot-password-view-submit'
							loading={isFetching}
							disabled={invalidEmail}
							theme={theme}
						/>
					</View>
				</ScrollView>
			</KeyboardView>
		);
	}
}

export default withTheme(ForgotPasswordView);
