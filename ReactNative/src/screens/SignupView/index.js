import React from 'react';
import {
	View, ImageBackground, StyleSheet, Text
} from 'react-native';
import {ROOT_INSIDE} from '../../actions/app';
import styles from './styles';
import OAuthLogin from '../../components/OAuthLogin';
import Button from '../../components/Button';
import StatusBar from '../../components/StatusBar';
import {withTheme} from "../../theme";
import {themes} from "../../constants/colors";

class SignupView extends React.Component {
	static navigationOptions = () => ({
		headerShown: false
	});

	constructor(props) {
		super(props);
		this.state = {
			services: {
				apple: { name: 'Apple' },
				google: { name: 'Google' },
				facebook: { name: 'Facebook'}
			}
		}
	}

	login = () => {
		const { navigation } = this.props;
		navigation.navigate('LoginView');
	}

	register = () => {
		const { navigation } = this.props;
		navigation.navigate('RegisterView');
	}

	render() {
		const { navigation, theme } = this.props;
		const { services } = this.state;

		return (
			<ImageBackground source={require('../../assets/onboard.png')} style={styles.container} >
				<StatusBar light />
				<View style={styles.content}>
					<View style={[styles.buttonsContainer]}>
						<OAuthLogin navigation={navigation} services={services} isSignup />
						<View style={{ backgroundColor: themes[theme].auxiliaryTintColor, width: 340, height: StyleSheet.hairlineWidth, marginBottom: 12, marginTop: 4 }} theme={theme}/>
						<Button
							text={'Sign up with Email'}
							type='primary'
							size='P'
							oauth
							icon='envelope-o'
							onPress={this.register}
							testID='onboarding-view-register'
							theme={theme}
						/>
						<View style={styles.loginText}>
							<Text style={{ color: themes[theme].bodyText, textDecorationLine: 'underline' }} onPress={this.login}>{'Already have an account?'}</Text>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}



export default withTheme(SignupView);
