import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Touchable from 'react-native-platform-touchable';

import { avatarURL } from '../../utils/avatar';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Avatar = React.memo(({
	text,
	size,
	borderRadius,
	style,
	avatar,
	type,
	children,
	user,
	onPress,
	backIcon,
	theme,
	avatarETag,
	isStatic
}) => {
	if ((!text && !avatar && !backIcon)) {
		return null;
	}

	const avatarStyle = {
		width: size,
		height: size,
		borderRadius
	};

	let image;
	if(!text && !avatar && backIcon){
		image = (
			<View style={{ alignItems: 'center', justifyContent: 'center', height: '100%'}}>
				<FontAwesome name={backIcon} size={size/2} color={'white'}/>
			</View>
		);
	} else if (text === 'default' || avatar === 'default') {
		switch (type) {
			case 'u':
				image = (
					<View style={{ alignItems: 'center', justifyContent: 'center', height: '100%'}}>
						<FontAwesome5 name={'user-alt'} size={size/2} color={'white'}/>
					</View>
				);
				break;
			case 'c':
				image = (
					<View style={{ alignItems: 'center', justifyContent: 'center', height: '100%'}}>
						<MaterialCommunityIcons name={'shield-account'} size={size/2} color={'white'}/>
					</View>
				);
				break;
			case 'g':
				image = (
					<View style={{ alignItems: 'center', justifyContent: 'center', height: '100%'}}>
						<FontAwesome name={'group'} size={size/2} color={'white'}/>
					</View>
				);
				break;
		}
	} else {
		let uri = avatar;
		if (!isStatic) {
			uri = avatarURL({
				type,
				text,
				size,
				user,
				avatar,
				avatarETag
			});
		}

		image = (
			<FastImage
				style={avatarStyle}
				source={{
					uri,
					priority: FastImage.priority.high
				}}
			/>
		);
	}

	if (onPress) {
		image = (
			<Touchable onPress={onPress}>
				{image}
			</Touchable>
		);
	}


	return (
		<View style={[avatarStyle, style]}>
			{image}
			{children}
		</View>
	);
});

Avatar.propTypes = {
	style: PropTypes.any,
	text: PropTypes.string,
	avatar: PropTypes.string,
	size: PropTypes.number,
	borderRadius: PropTypes.number,
	type: PropTypes.string,
	children: PropTypes.object,
	user: PropTypes.shape({
		id: PropTypes.string,
		token: PropTypes.string
	}),
	theme: PropTypes.string,
	onPress: PropTypes.func,
	avatarETag: PropTypes.string,
	isStatic: PropTypes.bool,
	serverVersion: PropTypes.string
};

Avatar.defaultProps = {
	text: '',
	size: 25,
	type: 'u',
	borderRadius: 4
};

export default Avatar;
