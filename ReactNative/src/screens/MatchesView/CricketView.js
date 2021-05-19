import React from "react";
import {View, Text, FlatList, ScrollView, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import styles from "./style";
import MatchItem from "./MatchItem";
import {themes} from "../../constants/colors";
import ScrollableTabView from "react-native-scrollable-tab-view";
import scrollPersistTaps, {scrollProps} from "../../utils/scrollPersistTaps";
import EmptyView from "./EmptyView";

export default class CricketView extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            matches: [
                {
                    id: 1,
                    league_name: 'MGM Odisha T20',
                    team_a: {
                        name: 'Odisha Cheetahs',
                        avatar: 'default',
                        symbol: 'ODC'
                    },
                    team_b: {
                        name: 'Odisha Pumas',
                        avatar: 'default',
                        symbol: 'OPU'
                    },
                    left_time: '24h',
                    is_live: true,
                    is_timing: true,
                    allow_notify: true,
                    team_count: 2,
                    contest_count: 2
                },
                {
                    id: 2,
                    league_name: 'MGM Odisha T20',
                    team_a: {
                        name: 'Odisha Cheetahs',
                        avatar: 'default',
                        symbol: 'ODC'
                    },
                    team_b: {
                        name: 'Odisha Pumas',
                        avatar: 'default',
                        symbol: 'OPU'
                    },
                    left_time: '24h',
                    is_live: true,
                    is_timing: true,
                    allow_notify: true,
                    team_count: 1,
                    contest_count: 1
                }
            ],
        }
    }

    onPressMatch = (match) => {
        const { navigation } = this.props;
        navigation.navigate('ContestView', { match: {...match} });
    }


    renderTabContent = (type) => {
        const { navigation, theme } = this.props;
        const { matches } = this.state;
        if(!matches.length){
            return (
                <EmptyView theme={theme} onViewComing={() => navigation.navigate('HomeView')} />
            )
        }
        return (
            <View
                key={`Cricket-${type}`}
                style={styles.tabContent}
            >
                <FlatList
                    key={`cricket-matches`}
                    style={styles.matchList}
                    keyExtractor={item => item.id || item}
                    data={matches}
                    renderItem={({ item }) => {
                        return (<MatchItem data={item} onPress={ () => this.onPressMatch(item)} theme={theme}/>);
                    }}
                    initialNumToRender={10}
                    removeClippedSubviews
                />
            </View>
        );
    }

    goToPage = (i) => {
        if(this.tabViewRef){
            this.tabViewRef.goToPage(i);
        }
    }

    isActivePage = (i) => {
        return this.tabViewRef && this.tabViewRef.state.currentPage === i;
    }

    renderTab = () =>{
        const { theme } = this.props;
        let tabs = [
            { text: 'Upcoming' },
            { text: 'Live' },
            { text: 'Completed' },
        ];

        return (
            <View style={{ ...styles.tabBarContainer, backgroundColor: themes[theme].backgroundColor }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} {...scrollPersistTaps} contentContainerStyle={styles.subTabsContainer}>
                    { tabs.map((tab, i) => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={tab.text}
                            onPress={() => this.goToPage(i)}
                            style={styles.subTab}
                            testID={`Cricket-${ tab }`}
                        >
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

    render = () => {
        const { navigation, theme } = this.props;
        return (
            <ScrollableTabView
                key='Cricket'
                ref={ref => this.tabViewRef = ref}
                renderTabBar={ this.renderTab }
                initialPage={0}
                contentProps={scrollProps}
            >
                { this.renderTabContent('upcoming')}
                { this.renderTabContent('live')}
                { this.renderTabContent('completed')}
            </ScrollableTabView>
        );
    }
}
