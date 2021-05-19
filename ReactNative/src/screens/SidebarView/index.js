import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from 'react-redux';
import React from "react";
import Avatar from '../../components/Avatar';
import {themes} from "../../constants/colors";
import {withTheme} from "../../theme";
import PropTypes from 'prop-types';
import sharedStyles from '../../screens/Styles';
import scrollPersistTaps from "../../utils/scrollPersistTaps";
import SidebarItem from "./SidebarItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class SidebarView extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        user: PropTypes.object,
        activeItemKey: PropTypes.string,
        theme: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    sidebarNavigate = (route) => {
        const { navigation } = this.props;
        navigation.navigate(route);
    }

    render() {
        const { activeItemKey, theme, user } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ ...styles.titleContainer, backgroundColor: themes[theme].headerBackground}}>
                    <Avatar
                        key='user-avatar'
                        borderRadius={20}
                        style={styles.avatarStyle}
                        type={'u'}
                        text={'default'}
                        size={40}
                    />
                    <Text style={[styles.title, { fontSize: 18, color: themes[theme].headerTitleColor }]} numberOfLines={1}>{user.username}</Text>
                </View>
                <ScrollView style={{ backgroundColor: themes[theme].backgroundColor }} {...scrollPersistTaps}>
                    <SidebarItem
                        text={'My Balance'}
                        left={<Ionicons size={20} color={themes[theme].bodyText} name={'md-wallet-outline'} />}
                        right={<Text style={{ color: themes[theme].bodyText }}>{'₹100'}</Text>}
                        onPress={() => this.sidebarNavigate('NewCardView')}
                        testID='settings-balance'
                        theme={theme}
                    />
                    <SidebarItem
                        text={'Earn ₹100'}
                        left={<MaterialCommunityIcons size={20} color={themes[theme].bodyText} name={'currency-inr'} />}
                        right={<Text style={{ color: themes[theme].bodyText, borderRadius: 4, borderWidth: 1, borderColor: 'gray', fontSize: 10, paddingVertical: 2, paddingHorizontal: 6 }}>{'INVITE'}</Text>}
                        onPress={() => this.sidebarNavigate('NewCardView')}
                        testID='settings-earn'
                        theme={theme}
                    />
                    <SidebarItem
                        text={'Find People'}
                        left={<Ionicons size={20} color={themes[theme].bodyText} name={'search-outline'} />}
                        onPress={() => this.sidebarNavigate('NewCardView')}
                        testID='settings-find'
                        theme={theme}
                    />
                    <SidebarItem
                        text={'My Coupons'}
                        left={<Ionicons size={20} color={themes[theme].bodyText} name={'gift-outline'} />}
                        onPress={() => this.sidebarNavigate('NewCardView')}
                        testID='settings-coupons'
                        theme={theme}
                    />
                    <View style={{ ...styles.sectionSeparatorBorder, borderColor: themes[theme].borderColor }} />
                    <SidebarItem
                        text={'My Info & Settings'}
                        left={<Ionicons size={20} color={themes[theme].bodyText} name={'settings-outline'} />}
                        onPress={() => this.sidebarNavigate('NewCardView')}
                        testID='settings-info'
                        theme={theme}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    title: {
        ...sharedStyles.textSemibold,
        fontSize: 18,
        paddingHorizontal: 16
    },
    avatarStyle: {
        borderWidth: 2,
        borderColor: 'white'
    },
    sectionSeparatorBorder: {
        borderTopWidth: 1,
        marginLeft: 18
    }
});

const mapStateToProps = state => ({
    user: {
        id: state.login.user && state.login.user.id,
        username: state.login.user && state.login.user.username,
        token: state.login.user && state.login.user.token
    },
});

export default connect(mapStateToProps, null)(withTheme(SidebarView));
