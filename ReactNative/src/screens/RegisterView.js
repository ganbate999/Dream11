import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, ScrollView, Alert, StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import KeyboardView from '../components/KeyboardView';
import sharedStyles from './Styles';
import scrollPersistTaps from '../utils/scrollPersistTaps';
import { loginRequest as loginRequestAction } from '../actions/login';
import isValidEmail from '../utils/isValidEmail';
import StatusBar from '../components/StatusBar';
import CheckBox from "../components/CheckBox";
import {KeyboardUtils} from "react-native-keyboard-input";
import {withTheme} from "../theme";
import {themes} from "../constants/colors";

const styles = StyleSheet.create({
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
	loginText: {
		...sharedStyles.bottomText,
		marginVertical: 20
	},
	textSize: {
		fontSize: 16
	},
	textLink: {
		...sharedStyles.link,
		fontSize: 16
	}
});


class RegisterView extends React.Component {

	static propTypes = {
		navigation: PropTypes.object,
		loginRequest: PropTypes.func,
		theme: PropTypes.string
	}

	state = {
		agree: false,
		email: '',
		password: '',
		password_confirm: '',
		saving: false,
		email_error: false,
		password_error: false,
		password_confirm_error: false
	}

	valid = () => {
		const {
			agree, email, password, password_confirm
		} = this.state;
		return agree
			&& email.trim()
			&& password.trim()
			&& password_confirm.trim()
			&& isValidEmail(email)
			&& (password.trim().length >= 8)
			&& (password.trim().length <= 32)
			&& (password.trim() === password_confirm.trim());
	}

	submit = async() => {
		const {
			email, password, password_confirm
		} = this.state;
		if (!this.valid()) {
			if (!isValidEmail(email)) {
				this.setState({ email_error: true });
			}
			if (!(password.trim().length >= 8)) {
				this.setState({ password_error: true });
			}
			if (!(password.trim().length <= 32)) {
				this.setState({ password_error: true });
			}
			if (password.trim() !== password_confirm.trim()) {
				this.setState({ password_confirm_error: true });
			}

			return;
		}
		this.setState({ saving: true });
		KeyboardUtils.dismiss();

		const { navigation } = this.props;

		try {
			// await RocketChat.register({
			// 	email, pass: password
			// });
			navigation.navigate('RegisterCompleteView');
			return;
		} catch (e) {
			Alert.alert('Oops', e.data?e.data.error:'Error register user!');
		}
		this.setState({ saving: false });
		this.setState({ email_error: false });
		this.setState({ password_error: false });
		this.setState({ password_confirm_error: false });
	}

	unlock = () => {
		const { navigation } = this.props;
		navigation.navigate('AccountUnlockView');
	}

	onTerms = () => {
		const { navigation } = this.props;
		navigation.navigate('TermsOfServiceView');
	}

	toggleCheck = () => {
		const { agree } = this.state;
		this.setState({ agree: !agree });
	};

	render() {
		const { agree, saving, email_error, password_error, password_confirm_error } = this.state;
		const { theme } = this.props;

		return (
			<KeyboardView contentContainerStyle={sharedStyles.container}>
				<Image source={require('../assets/onboard.png')} style={styles.imageBackground} />
				<StatusBar />
				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
					<Image source={require('../assets/ic_back.png')} style={styles.backNavButton} />
				</TouchableOpacity>
				<ScrollView {...scrollPersistTaps} contentContainerStyle={ sharedStyles.containerScrollView }>
					<Text style={[sharedStyles.loginTitle, sharedStyles.textBold, {color: themes[theme].backgroundColor}]}>{'Sign Up With Email'}</Text>
					{email_error ? <Text style={{ color: '#ff0000' }}>{'Invalid email address!'}</Text> : null}
					<TextInput
						inputRef={(e) => { this.emailInput = e; }}
						placeholder={'Email'}
						returnKeyType='next'
						keyboardType='email-address'
						iconLeft='mail'
						onChangeText={email => this.setState({ email })}
						onSubmitEditing={() => { this.passwordInput.focus(); }}
						testID='register-view-email'
						theme={theme}
					/>
					{password_error ? <Text style={{ color: '#ff0000' }}>{'Invalid password!'}</Text> : null}
					<TextInput
						inputRef={(e) => { this.passwordInput = e; }}
						placeholder={'Password'}
						returnKeyType='next'
						iconLeft='key'
						secureTextEntry
						onChangeText={value => this.setState({ password: value })}
						onSubmitEditing={() => { this.passwordConfirmInput.focus(); }}
						testID='register-view-password'
						theme={theme}
					/>
					{password_confirm_error ? <Text style={{ color: '#ff0000' }}>{'Invalid confirm password!'}</Text> : null}
					<TextInput
						inputRef={(e) => { this.passwordConfirmInput = e; }}
						placeholder={'Confirm Password'}
						returnKeyType='send'
						iconLeft='key'
						secureTextEntry
						onChangeText={value => this.setState({ password_confirm: value })}
						onSubmitEditing={this.submit}
						testID='register-view-password-confirm'
						containerStyle={sharedStyles.inputLastChild}
						theme={theme}
					/>
					<Text style={{ color: themes[theme].auxiliaryText}}>{'※ The characters that can be used for the password are required to be at least 8 characters including alphanumeric characters and symbols.'}</Text>
					<View style={{ alignItems: 'center' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<CheckBox
								title={'I agree with the'}
								checked={agree}
								onPress={() => this.toggleCheck()}
								onIconPress={() => this.toggleCheck()}
								checkedColor='white'
								checkedIcon='check-square-o'
								uncheckedIcon='square-o'
								unCheckedColor={themes[theme].backgroundColor}
								textStyle={{ color: themes[theme].backgroundColor }}
								containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
							/>
							<TouchableOpacity onPress={() => this.onTerms()}>
								<Text style={{ color: themes[theme].tintColor }}>Terms of Service</Text>
							</TouchableOpacity>
						</View>
						<Button
							text={'Sign Up'}
							type='done'
							size='Y'
							style={{ alignItems: 'center', marginTop: 15 }}
							onPress={this.submit}
							disabled={!this.valid()}
							loading={saving}
							testID='register-view-submit'
							theme={theme}
						/>
					</View>
				</ScrollView>
			</KeyboardView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	loginRequest: params => dispatch(loginRequestAction(params))
});

export default connect(null, mapDispatchToProps)(withTheme(RegisterView));
