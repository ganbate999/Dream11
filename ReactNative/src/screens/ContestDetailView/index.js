import React from "react";
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";
import ProgressBar from 'react-native-progress/Bar';

import {withTheme} from "../../theme";
import styles from "./style";
import {themes} from "../../constants/colors";
import {VectorIcon} from "../../components/VectorIcon";
import scrollPersistTaps, {scrollProps} from "../../utils/scrollPersistTaps";
import ScrollableTabView from "react-native-scrollable-tab-view";
import SafeAreaView from "../../components/SafeAreaView";
import StatusBar from "../../components/StatusBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";

class ContestDetailView extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        const contest = props.route.params.contest;
        this.state = {
            data: contest,
            width: 0,
            rankings: [
                { rank: '1', price: 1500 },
                { rank: '2', price: 1400 },
                { rank: '3', price: 1200 },
                { rank: '4', price: 1000 },
                { rank: '5', price: 900 },
                { rank: '6', price: 800 },
                { rank: '7', price: 700 },
                { rank: '8', price: 600 },
                { rank: '9', price: 500 },
                { rank: '10~20', price: 400 },
                { rank: '21~50', price: 100 }
            ],
            leaderboards: [
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'},
                { avatar: 'default', name: 'Indian 1 2', mark: 'T1'}
            ]
        }
        this.setHeader();
    }

    setHeader = () => {
        const { navigation } = this.props;
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 4 }} onPress={this.onPressWallet}>
                    <Ionicons name={'wallet'} size={24} style={{ marginRight: 8 }} color={'white'}/>
                </TouchableOpacity>
            ),
        });
    }

    onPressWallet = () => {

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
            { text: 'Contest Details' },
            { text: 'Leaderboard' },
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
                            testID={`Contest-${ tab.text }`}
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

    onJoinContest = () => {

    }

    renderTabContent = (type) => {
        const { theme } = this.props;
        if(type === 'detail'){
            const { rankings, data } = this.state;
            if(rankings.length < 2){
                return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 20, color: themes[theme].bodyText, fontWeight: 'bold' }}>Rank 1</Text>
                            <Text style={{ fontSize: 16, color: themes[theme].bodyText, marginTop: 8 }}>{`Wins ₹${data.win_benefit}`}</Text>
                        </View>
                    );
            }
            return (
                <View
                    key={`Contest-${type}`}
                    style={styles.tabContent}
                >
                    <Text style={{ ...styles.listNote, color: themes[theme].titleText }}>Be the first in your network to join this contest</Text>
                    <View style={styles.listHeader}>
                        <Text style={{ ...styles.listHeaderTitle, color: themes[theme].auxiliaryText }}>BANK</Text>
                        <Text style={{ ...styles.listHeaderTitle, color: themes[theme].auxiliaryText }}>PRIZE</Text>
                    </View>
                    <FlatList
                        key={`contest-rankings`}
                        style={styles.contestList}
                        keyExtractor={item => item.rank || item}
                        data={rankings}
                        renderItem={({ item }) => {
                            return (<View style={styles.listItemContainter}>
                                <View style={styles.contestRank}>
                                    <Text style={{ color: themes[theme].auxiliaryText }}>#</Text>
                                    <Text style={{ color: themes[theme].bodyText }}>{item.rank}</Text>
                                </View>
                                <Text style={{ ...styles.contestPrice, color: themes[theme].bodyText }}>₹{item.price}</Text>
                            </View>);
                        }}
                        initialNumToRender={10}
                        removeClippedSubviews
                    />
                </View>
            );
        } else if(type === 'leaderboard'){
            const { leaderboards } = this.state;
            if(leaderboards.length < 2){
                return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 16, color: themes[theme].auxiliaryText }}>No team has joined this contest yet</Text>
                        <Text style={{ fontSize: 16, color: themes[theme].auxiliaryText, marginTop: 8 }}>Be the first one to join this contest & start winning!</Text>
                        <Button
                            style={{ marginTop: 12 }}
                            onPress={this.onJoinContest}
                            text={'JOIN CONTEST'}
                            size='U'
                            theme={theme}
                        />
                    </View>
                );
            }
            return (
                <View
                    key={`Contest-${type}`}
                    style={styles.tabContent}
                >
                    <Text style={{ ...styles.listNote, color: themes[theme].titleText }}>Be the first in your network to join this contest</Text>
                    <View style={styles.listHeader}>
                        <Text style={{ ...styles.listHeaderTitle, color: themes[theme].auxiliaryText }}>{`ALL TEAMS (${leaderboards.length})`}</Text>
                    </View>
                    <FlatList
                        key={`contest-leaderboards`}
                        style={styles.contestList}
                        keyExtractor={item => item.name || item}
                        data={leaderboards}
                        renderItem={({ item }) => {
                            return (<View style={styles.listItemLeaderboardContainter}>
                                <Avatar
                                    key='team-a-avatar'
                                    style={styles.teamAvatarStyle}
                                    type={'c'}
                                    borderRadius={24}
                                    size={48}
                                    text={item.avatar}
                                />
                                <Text style={{ color: themes[theme].bodyText }}>{item.name}</Text>
                                <Text style={ styles.leaderboardMark }>{item.mark}</Text>
                            </View>);
                        }}
                        initialNumToRender={10}
                        removeClippedSubviews
                    />
                </View>
            );
        }
    }

    render = () => {
        const { theme } = this.props;
        const { data, width } = this.state;
        const { name, all_amount, bit_amount, left_spots, all_spots, upto_entries, win_percent, win_benefit, is_checked } = data;
        const progress_percent = 1 - (left_spots/all_spots);

        return (
            <SafeAreaView style={styles.container} theme={theme}>
                <StatusBar/>
                <View style={{ ...styles.contestData, backgroundColor: themes[theme].backgroundColor }}>
                    <View style={styles.contestItemHeader}>
                        <Text style={styles.contestName}>{name}</Text>
                        <Text>Entry</Text>
                    </View>
                    <View style={styles.contestContent}>
                        <Text style={{ ...styles.allAmount, color: themes[theme].bodyText }}>₹{all_amount}</Text>
                        <Text style={{ ...styles.amount }}>₹{bit_amount}</Text>
                    </View>
                    <View style={styles.progress} onLayout={e => {
                        if(e.nativeEvent.layout){
                            this.setState({ width: e.nativeEvent.layout.width })
                        }
                    }}>
                        <ProgressBar progress={progress_percent} width={width??300} color={'#ffaf24'}/>
                    </View>
                    <View style={styles.contestContent}>
                        <Text style={{ ...styles.leftSpots, color: themes[theme].activeTintColor }}>{left_spots} spots left</Text>
                        <Text style={{ ...styles.allSpots, color: themes[theme].bodyText }}>{all_spots} spots</Text>
                    </View>
                    <View style={{ ...styles.contestItemFooter, backgroundColor: themes[theme].auxiliaryBackground }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.footerItem}>
                                <VectorIcon type={'Ionicons'} name={'ios-trophy-outline'} size={16} color={'gray'} style={styles.markStyle} />
                                <Text style={{ ...styles.markLabel, color: themes[theme].bodyText }}>₹{win_benefit}</Text>
                            </View>
                            {
                                win_percent?
                                    <View style={styles.footerItem}>
                                        <VectorIcon type={'Ionicons'} name={'ios-pie-chart-outline'} size={16} color={'gray'} style={styles.markStyle} />
                                        <Text style={{ ...styles.markLabel, color: themes[theme].bodyText }}>{win_percent}%</Text>
                                    </View>
                                    :null
                            }
                            <View style={styles.footerItem}>
                                <VectorIcon type={'Ionicons'} name={'md-pricetags-outline'} size={16} color={'gray'} style={styles.markStyle} />
                                <Text style={{ ...styles.markLabel, color: themes[theme].bodyText }}>{ (upto_entries && upto_entries>1) ? `Upto ${upto_entries} Entries`:'Single Entry'}</Text>
                            </View>
                        </View>
                        <View stye={{ alignItems: 'center'}}>
                            { is_checked ? <VectorIcon type={'MaterialCommunityIcons'} name={'checkbox-marked-circle-outline'} size={16} color={'gray'} style={styles.markStyle} /> : null}
                        </View>
                    </View>
                </View>
                <ScrollableTabView
                    key='ContestDetail'
                    ref={ref => this.tabViewRef = ref}
                    renderTabBar={ this.renderTab }
                    initialPage={0}
                    contentProps={scrollProps}
                >
                    { this.renderTabContent('detail')}
                    { this.renderTabContent('leaderboard')}
                </ScrollableTabView>
            </SafeAreaView>
        )
    }
}

export default withTheme(ContestDetailView);
