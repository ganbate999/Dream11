import { View, Text, StyleSheet } from "react-native";
import React  from "react";
import {MenuButton} from "../../components/header/header";
import styles from "./style";
import SafeAreaView from "../../components/SafeAreaView";
import StatusBar from "../../components/StatusBar";
import {withTheme} from "../../theme";
import PropTypes from "prop-types";
import {themes} from "../../constants/colors";

class FeedView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => <MenuButton onPress={() => navigation.openDrawer()} />,
            title: "Feed",
            headerLayoutPreset: "center"
        };
    };

    static propsType = {
        navigation: PropTypes.object,
        theme: PropTypes.string
    }

    constructor(props) {
        super(props);
    }


    render() {
        const { theme } = this.props;
        return (
            <SafeAreaView theme={theme} style={{ ...styles.container, backgroundColor: themes[theme].auxiliaryBackground }}>
                <StatusBar/>
                <View style={styles.emptyContent}>
                    <Text style={{ color: themes[theme].bodyText }}>Not following anyone? Follow the top performers and up your game!</Text>
                    <Text style={{ color: themes[theme].bodyText }}>In the meantime, share something with your followers!</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default withTheme(FeedView);
