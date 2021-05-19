import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { themes } from '../../constants/colors';
import styles from './styles';
import { Button } from './Button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Item = React.memo(({ item, hide, theme }) => {
	const onPress = () => {
		hide();
		item?.onPress();
	};

	return (
		<Button
			onPress={onPress}
			style={[styles.item, { backgroundColor: themes[theme].focusedBackground }]}
			theme={theme}
		>
			<MaterialCommunityIcons name={item.icon} size={20} color={item.danger ? themes[theme].dangerColor : themes[theme].bodyText} />
			<Text
				numberOfLines={1}
				style={[styles.title, { color: item.danger ? themes[theme].dangerColor : themes[theme].bodyText }]}
			>
				{item.title}
			</Text>
		</Button>
	);
});
Item.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		icon: PropTypes.string,
		danger: PropTypes.bool,
		onPress: PropTypes.func
	}),
	hide: PropTypes.func,
	theme: PropTypes.string
};
