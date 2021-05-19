import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MenuButton, Logo } from "../../components/header/header";
import SafeAreaView from "../../components/SafeAreaView";
import {withTheme} from "../../theme";
import StatusBar from "../../components/StatusBar";
import styles from "./style";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {themes} from "../../constants/colors";
import PropTypes from "prop-types";
import CricketView from "./CricketView";
import FootballView from "./FootballView";
import BasketballView from "./BasketballView";
import {VectorIcon} from "../../components/VectorIcon";
import scrollPersistTaps from "../../utils/scrollPersistTaps";
import BaseballView from "./BaseballView";
import HandballView from "./HandballView";
import NFLView from "./NFLView";


const scrollProps = {
    keyboardShouldPersistTaps: 'always',
    keyboardDismissMode: 'none'
};

class HomeView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: () => <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };

    static propsType = {
        navigation: PropTypes.object,
        theme: PropTypes.string
    }

    goToPage = (i) => {
        if(this.tabViewRef){
            this.tabViewRef.goToPage(i);
        }
    }

    isActivePage = (i) => {
        return this.tabViewRef && this.tabViewRef.state.currentPage === i;
    }

    renderTab = () => {
        const { theme } = this.props;
        let tabs = [
            { type: "MaterialCommunityIcons", icon: "cricket", text: 'Cricket' },
            { type: "Ionicons", icon: "football", text: 'Football' },
            { type: "Ionicons", icon: "md-basketball", text: 'Basketball' },
            { type: "Ionicons", icon: "md-baseball", text: 'Baseball' },
            { type: "MaterialCommunityIcons", icon: "handball", text: 'Handball' },
            { type: "Ionicons", icon: "md-american-football", text: 'NFL' }
        ]
        return (
            <View style={{ ...styles.tabBarContainer, backgroundColor: themes[theme].backgroundColor }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} {...scrollPersistTaps} contentContainerStyle={styles.tabsContainer}>
                    { tabs.map((tab, i) => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={tab.text}
                            onPress={() => this.goToPage(i)}
                            style={[this.isActivePage(i) ? styles.activeTab : styles.tab, {borderBottomColor: themes[theme].activeTintColor}]}
                            testID={`friend-add-${ tab }`}
                        >
                            <VectorIcon type={tab.type} name={tab.icon} size={36} color={ this.isActivePage(i)?themes[theme].activeTintColor:themes[theme].inactiveTintColor } />
                            { this.isActivePage(i) ?
                                <Text style={{ ...styles.activeTabText, color: themes[theme].activeTintColor }}>{tab.text}</Text>
                                :
                                <Text style={{ ...styles.tabText, color: themes[theme].inactiveTintColor }}>{tab.text}</Text>
                            }
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }

    render() {
        const { navigation, theme } = this.props;
        return (
            <SafeAreaView style={styles.container} theme={theme}>
                <StatusBar/>
                <ScrollableTabView
                    ref={ref => this.tabViewRef = ref}
                    renderTabBar={ this.renderTab }
                    initialPage={0}
                    contentProps={scrollProps}
                >
                    <CricketView theme={theme} navigation={navigation} />
                    <FootballView theme={theme} navigation={navigation} />
                    <BasketballView theme={theme} navigation={navigation} />
                    <BaseballView theme={theme} navigation={navigation} />
                    <HandballView theme={theme} navigation={navigation} />
                    <NFLView theme={theme} navigation={navigation} />
                </ScrollableTabView>
            </SafeAreaView>
        );
    }
}

export default withTheme(HomeView);
