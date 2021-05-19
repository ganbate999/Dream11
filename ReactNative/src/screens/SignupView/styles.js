import { StyleSheet } from 'react-native';

import { verticalScale, moderateScale } from '../../utils/scaling';
import sharedStyles from '../Styles';

const colors = {
	backgroundPrimary: '#1D74F5',
	backgroundSecondary: 'white',

	textColorPrimary: 'white',
	textColorSecondary: '#1D74F5',

	borderColorPrimary: '#1D74F5',
	borderColorSecondary: '#E1E5E8'
};

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		// backgroundColor: 'rgba(0,0,0,0.2)',
		justifyContent: 'center'
	},
	title: {
		...sharedStyles.textBold,
		letterSpacing: 0,
		fontSize: moderateScale(24),
		color: '#2F343D',
		alignSelf: 'center',
		marginBottom: verticalScale(8)
	},
	subtitle: {
		...sharedStyles.textRegular,
		fontSize: moderateScale(16),
		color: '#54585E',
		alignSelf: 'center'
	},
	buttonsContainer: {
		marginBottom: verticalScale(10),
		marginTop: verticalScale(30),
		alignItems: 'center'
	},
	buttonTitle: {
		...sharedStyles.textSemibold,
		fontSize: 17
	},
	buttonSubtitle: {
		...sharedStyles.textRegular,
		color: '#9EA2A8',
		fontSize: 15
	},
	buttonIconContainer: {
		width: 65,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonIcon: {
		marginHorizontal: 10,
		width: 20,
		height: 20
	},
	buttonActive: {
		opacity: 0.5
	},
	button_container_primary: {
		backgroundColor: colors.backgroundPrimary,
		borderColor: colors.borderColorPrimary
	},
	button_container_secondary: {
		backgroundColor: colors.backgroundSecondary,
		borderColor: colors.borderColorSecondary
	},
	button_text_primary: {
		color: colors.textColorPrimary
	},
	button_text_secondary: {
		color: colors.textColorSecondary
	},
	closeModal: {
		position: 'absolute',
		left: 15
	},
	separatorOtherwise: {
		alignSelf: 'center',
		// marginTop: verticalScale(10),
		marginBottom: verticalScale(10),
		maxHeight: verticalScale(9),
		resizeMode: 'contain',
		width: 340,
		height: 9
	},
	loginText: {
		...sharedStyles.bottomText
	},
	textLink: {
		...sharedStyles.link
	},
});
