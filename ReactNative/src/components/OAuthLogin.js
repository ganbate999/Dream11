import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Base64 } from 'js-base64';
import equal from 'deep-equal';
import Button from './Button';
import random from '../utils/random';
import { withTheme } from "../theme";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-community/google-signin";

GoogleSignin.configure({
	webClientId: '1096307846410-svb0gh1eojogin0uc2om194599vt636o.apps.googleusercontent.com'
})
class OAuthLogin extends React.Component {

	static propTypes = {
		navigation: PropTypes.object,
		services: PropTypes.object,
		isSignup: PropTypes.bool.isRequired,
		theme: PropTypes.string
	}

	shouldComponentUpdate(nextProps) {
		const { services } = this.props;
		if (!equal(nextProps.services, services)) {
			return true;
		}
		return false;
	}

	onPressApple = () => {
		const { services } = this.props;
		const { clientId } = services.apple;
		const endpoint = 'https://appleid.apple.com/auth/authorize';
		const redirect_uri = `${ server }/_oauth/apple?close`;
		const scope = 'email';
		const state = this.getOAuthState();
		const params = `?response_type=code&response_mode=form_post&client_id=${ clientId }&redirect_uri=${ redirect_uri }&state=${ state }&scope=${ scope }`;
		this.openOAuth(`${ endpoint }${ params }`);
	}

	onPressFacebook = () => {
		const { services, server } = this.props;
		const { clientId } = services.facebook;
		const endpoint = 'https://m.facebook.com/v2.9/dialog/oauth';
		const redirect_uri = `${ server }/_oauth/facebook?close`;
		const scope = 'email';
		const state = this.getOAuthState();
		const params = `?client_id=${ clientId }&redirect_uri=${ redirect_uri }&scope=${ scope }&state=${ state }&display=touch`;
		this.openOAuth(`${ endpoint }${ params }`);
	}

	onPressGoogle = async () => {
		const { services } = this.props;

		const { idToken } = await GoogleSignin.signIn();

		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		console.log('credential', googleCredential);
		// const { clientId } = services.google;
		// const endpoint = 'https://accounts.google.com/o/oauth2/auth';
		// const redirect_uri = `${ server }/_oauth/google?close`;
		// const scope = 'email';
		// const state = this.getOAuthState();
		// const params = `?client_id=${ clientId }&redirect_uri=${ redirect_uri }&scope=${ scope }&state=${ state }&response_type=code`;
		// this.openOAuth(`${ endpoint }${ params }`);
	}

	getOAuthState = () => {
		const credentialToken = random(43);
		return Base64.encodeURI(JSON.stringify({ loginStyle: 'popup', credentialToken, isCordova: true }));
	}

	openOAuth = (oAuthUrl) => {
		const { navigation } = this.props;
		navigation.navigate('OAuthView', { oAuthUrl });
	}

	renderItem = (service) => {
		const { isSignup, theme } = this.props;

		const suf = isSignup ? 'Sign up' : 'Sign in';
		let icon = '';
		let onPress = () => {};

		switch (service.name) {
			case 'Apple':
				onPress = this.onPressApple;
				icon='apple';
				break;
			case 'Facebook':
				onPress = this.onPressFacebook;
				icon='facebook-square';
				break;
			case 'Google':
				onPress = this.onPressGoogle;
				icon='google';
				break;
			default:
				break;
		}
		return (
			<Button
				key={service.name.toLowerCase()}
				icon={icon}
				text={`${ suf } with ${ service.name }`}
				type={service.name.toLowerCase()}
				oauth
				size='z'
				onPress={onPress}
				theme={theme}
			/>
		);
	}

	renderServices = () => {
		const { services } = this.props;
		return (
			<View>
				{Object.values(services).map(service => this.renderItem(service))}
			</View>
		);
	}

	render() {
		return (
			this.renderServices()
		);
	}
}


export default withTheme(OAuthLogin);
