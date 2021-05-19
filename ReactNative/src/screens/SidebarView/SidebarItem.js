import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';

import {themes} from "../../constants/colors";

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemCurrent: {
		backgroundColor: '#E1E5E8'
	},
	itemLeft: {
		marginHorizontal: 10,
		width: 32,
		alignItems: 'center',
		justifyContent: 'center'
	},
	itemCenter: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 12
	},
	itemText: {
		marginVertical: 16,
		fontWeight: 'bold',
		color: '#292E35'
	}
});


const Item = React.memo(({
	left, right, text, onPress, testID, current, theme
}) => (
	<RectButton
		key={testID}
		testID={testID}
		onPress={onPress}
		underlayColor='#292E35'
		activeOpacity={0.1}
		style={[styles.item, current && styles.itemCurrent]}
	>
		<View style={styles.itemLeft}>
			{left}
		</View>
		<View style={styles.itemCenter}>
			<Text style={{ ...styles.itemText, color: themes[theme].bodyText }}>
				{text}
			</Text>
			{right}
		</View>
	</RectButton>
));

Item.propTypes = {
	left: PropTypes.element,
	text: PropTypes.string,
	current: PropTypes.bool,
	onPress: PropTypes.func,
	testID: PropTypes.string,
	theme: PropTypes.string.isRequired
};

export default Item;
