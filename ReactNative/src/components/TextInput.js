import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { BorderlessButton } from 'react-native-gesture-handler';

import sharedStyles from '../screens/Styles';
import { COLOR_DANGER, COLOR_TEXT, themes } from '../constants/colors';
import ActivityIndicator from './ActivityIndicator';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
	error: {
		textAlign: 'center',
		paddingTop: 5
	},
	inputContainer: {
		marginBottom: 10
	},
	label: {
		marginBottom: 10,
		fontSize: 14,
		...sharedStyles.textSemibold
	},
	required: {
		marginBottom: 10,
		color: COLOR_DANGER,
		fontSize: 14,
		fontWeight: '700'
	},
	input: {
		...sharedStyles.textRegular,
		height: 48,
		fontSize: 17,
		color: COLOR_TEXT,
		paddingLeft: 14,
		paddingRight: 14,
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10
	},
	inputIconLeft: {
		paddingLeft: 45
	},
	inputIconRight: {
		paddingRight: 45
	},
	wrap: {
		position: 'relative'
	},
	iconContainer: {
		position: 'absolute',
		top: 14
	},
	iconLeft: {
		left: 15
	},
	iconRight: {
		right: 15
	},
	icon: {
		color: '#2F343D'
	},
	password: {
		color: COLOR_TEXT
	}
});

const ThemedTextInput = React.forwardRef(({ style, theme, ...props }, ref) => (
	<TextInput
		ref={ref}
		style={[{ color: themes[theme].titleText }, style]}
		placeholderTextColor={themes[theme].auxiliaryText}
		keyboardAppearance={theme === 'light' ? 'light' : 'dark'}
		{...props}
	/>
));

ThemedTextInput.propTypes = {
	style: PropTypes.object,
	theme: PropTypes.string
};


export default class RCTextInput extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		required: PropTypes.string,
		error: PropTypes.object,
		loading: PropTypes.bool,
		secureTextEntry: PropTypes.bool,
		containerStyle: PropTypes.any,
		inputStyle: PropTypes.object,
		inputRef: PropTypes.func,
		testID: PropTypes.string,
		iconLeft: PropTypes.string,
		placeholder: PropTypes.string,
		theme: PropTypes.string
	}

	static defaultProps = {
		error: {},
		theme: 'light'
	}

	state = {
		showPassword: false
	}

	get iconLeft() {
		const { testID, iconLeft, theme } = this.props;
		return (
			<MaterialCommunityIcons
				name={iconLeft}
				testID={testID ? `${ testID }-icon-left` : null}
				style={[styles.iconContainer, styles.iconLeft, { color: themes[theme].bodyText }]}
				size={20}
			/>
		);
	}

	get iconPassword() {
		const { showPassword } = this.state;
		const { testID, theme } = this.props;
		return (
			<BorderlessButton onPress={this.tooglePassword} style={[styles.iconContainer, styles.iconRight]}>
				<MaterialCommunityIcons
					name={showPassword ? 'eye' : 'eye-off'}
					testID={testID ? `${ testID }-icon-right` : null}
					style={{ color: themes[theme].auxiliaryText }}
					size={20}
				/>
			</BorderlessButton>
		);
	}

	get loading() {
		const { theme } = this.props;
		return <ActivityIndicator style={[styles.iconContainer, styles.iconRight, { color: themes[theme].bodyText }]} />;
	}

	tooglePassword = () => {
		this.setState(prevState => ({ showPassword: !prevState.showPassword }));
	}

	render() {
		const { showPassword } = this.state;
		const {
			label, required, error, loading, secureTextEntry, containerStyle, inputRef, iconLeft, inputStyle, testID, placeholder, theme, ...inputProps
		} = this.props;
		const { dangerColor } = themes[theme];
		return (
			<View style={[styles.inputContainer, containerStyle]}>
				{label ? (
					<Text
						contentDescription={null}
						accessibilityLabel={null}
						style={[
							styles.label,
							{ color: themes[theme].titleText },
							error.error && { color: dangerColor }
						]}
					>
						{label}
						{required ? <Text contentDescription={null} accessibilityLabel={null} style={[styles.required, error.error && styles.labelError]}>{` ${ required }`}</Text> : null}
					</Text>
				) : null}
				<View style={styles.wrap}>
					<ThemedTextInput
						style={[
							styles.input,
							iconLeft && styles.inputIconLeft,
							secureTextEntry && styles.inputIconRight,
							{
								backgroundColor: themes[theme].backgroundColor,
								borderColor: themes[theme].borderColor,
								color: themes[theme].titleText
							},
							error.error && {
								color: dangerColor,
								borderColor: dangerColor
							},
							inputStyle
						]}
						ref={inputRef}
						autoCorrect={false}
						autoCapitalize='none'
						underlineColorAndroid='transparent'
						secureTextEntry={secureTextEntry && !showPassword}
						testID={testID}
						accessibilityLabel={placeholder}
						placeholder={placeholder}
						contentDescription={placeholder}
						theme={theme}
						{...inputProps}
					/>
					{iconLeft ? this.iconLeft : null}
					{secureTextEntry ? this.iconPassword : null}
					{loading ? this.loading : null}
				</View>
				{error && error.reason ? <Text style={[styles.error, { color: dangerColor }]}>{error.reason}</Text> : null}
			</View>
		);
	}
}
