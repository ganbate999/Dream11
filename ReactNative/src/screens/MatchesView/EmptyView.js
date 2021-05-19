import React from "react";
import {StyleSheet, View, Text} from "react-native";
import PropTypes from "prop-types";
import Item from "../SidebarView/SidebarItem";
import {themes} from "../../constants/colors";
import Button from "../../components/Button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    note: {
        paddingVertical: 8,
        fontSize: 16,
    }
});
const EmptyView = React.memo(({ onViewUpcoming, theme }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: themes[theme].auxiliaryBackground }}>
            <Text style={{ ...styles.note, color: themes[theme].bodyText }}>You haven`t joined any upcoming contests</Text>
            <Text style={{ ...styles.note, color: themes[theme].bodyText }}>Join contest for any of the upcoming matches</Text>
            <Button
                style={{ marginTop: 12 }}
                onPress={onViewUpcoming}
                text={'VIEW UPCOMING MATCHES'}
                size='W'
                theme={theme}
            />
        </View>
    );
});

EmptyView.propTypes = {
    left: PropTypes.element,
    theme: PropTypes.string.isRequired
};

export default EmptyView;
