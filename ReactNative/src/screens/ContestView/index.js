import React from "react";
import PropTypes from "prop-types";
import {withTheme} from "../../theme";
import SafeAreaView from "../../components/SafeAreaView";
import StatusBar from "../../components/StatusBar";
import ScrollableTabView from "react-native-scrollable-tab-view";
import scrollPersistTaps, {scrollProps} from "../../utils/scrollPersistTaps";
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {themes} from "../../constants/colors";
import ContestItem from "./ContestItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import SortBar from "./SortBar";
import MyContestItem from "./MyContestItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {VectorIcon} from "../../components/VectorIcon";
import {withActionSheet} from "../../components/ActionSheet";

const tabs = [
    { key: 'contests', text: 'Contests' },
    { key: 'my_contests', text: 'MyContests (0)' },
    { key: 'my_team', text: 'My Team(0)' },
];

class ContestView extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        showActionSheet: PropTypes.func,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        const match = props.route.params.match;
        this.state = {
            match: match,
            contests: [
                {
                    id: 1,
                    name: 'MGM Odisha T20',
                    all_amount: '10 Lakhs',
                    bit_amount: '33',
                    left_spots: 24234,
                    all_spots: 25352,
                    upto_entries: 11,
                    win_percent: 67,
                    win_benefit: '1 Lakh',
                    is_checked: true,
                }
            ],
            myContests: [
                {
                    id: 1,
                    name: 'MGM Odisha T20',
                    left_spots: 24234,
                    all_spots: 25352,
                    upto_entries: 1,
                    win_benefit: '1 Lakh',
                    is_checked: true,
                },
                {
                    id: 1,
                    name: 'MGM Odisha T20',
                    left_spots: 24234,
                    all_spots: 25352,
                    upto_entries: 1,
                    is_checked: true,
                }
            ],
            currentTab: null,
            mounted: false
        };
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

    componentDidMount() {
        this.setState({mounted: true});
    }

    onPressWallet = () => {

    }

    onPressContest = (contest) => {
        const { navigation } = this.props;
        navigation.navigate('ContestDetailView', {contest});
    }

    onCreateTeam = () => {

    }

    onMyPressContest = (contest) => {
        const { navigation } = this.props;
        navigation.navigate('ContestDetailView', {contest});
    }

    renderTabContent = (key) => {
        const { theme } = this.props;
        const { contests, myContests } = this.state;
        switch (key){
            case 'contests':
                return (
                    <View
                        key={`Contests-${key}`}
                        style={styles.tabContent}
                    >
                        <SortBar theme={theme}/>
                        <Text style={{ ...styles.listTitle, color: themes[theme].titleText }}>Mega Contest</Text>
                        <Text style={{ ...styles.listDescription, color: themes[theme].auxiliaryText }}>Get ready for mega winnings!</Text>
                        <FlatList
                            key={`match-contests`}
                            style={styles.contestList}
                            keyExtractor={item => item.id || item}
                            data={contests}
                            renderItem={({ item }) => {
                                return (<ContestItem data={item} onPress={ () => this.onPressContest(item)} theme={theme}/>);
                            }}
                            initialNumToRender={10}
                            removeClippedSubviews
                        />
                    </View>
                );
            case 'my_contests':
                return (
                    <View
                        key={`Contests-${key}`}
                        style={styles.tabContent}
                    >
                        <FlatList
                            key={`match-my-contests`}
                            style={styles.contestList}
                            keyExtractor={item => item.id || item}
                            data={myContests}
                            renderItem={({ item }) => {
                                return (<MyContestItem data={item} onPress={ () => this.onMyPressContest(item)} theme={theme}/>);
                            }}
                            initialNumToRender={10}
                            removeClippedSubviews
                        />
                    </View>
                );
            case 'my_team':
                return (
                    <View
                        key={`Contests-${key}`}
                        style={styles.tabContent}
                    >
                        <FlatList
                            key={`match-my-teams`}
                            style={styles.contestList}
                            keyExtractor={item => item.id || item}
                            data={contests}
                            renderItem={({ item }) => {
                                return (<ContestItem data={item} onPress={ () => this.onPressContest(item)} theme={theme}/>);
                            }}
                            initialNumToRender={10}
                            removeClippedSubviews
                        />
                    </View>
                );
        }
        return null;
    }

    goToPage = (i) => {
        if(this.tabViewRef){
            this.tabViewRef.goToPage(i);
            this.setState({ currentTab: i });
        }
    }

    isActivePage = (i) => {
        return this.tabViewRef && this.tabViewRef.state.currentPage === i;
    }

    getTabText = (tab) => {
        const { myContests } = this.state;
        switch (tab.key){
            case 'contests':
                return 'Contests';
            case 'my_contests':
                return `My Contests(${myContests.length})`;
            case 'my_team':
                return `My Team(${myContests.length})`;
        }
        return null;
    }

    renderTab = () =>{
        const { theme } = this.props;

        return (
            <View style={{ ...styles.tabBarContainer, backgroundColor: themes[theme].backgroundColor }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} {...scrollPersistTaps} contentContainerStyle={styles.subTabsContainer}>
                    { tabs.map((tab, i) => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={tab.text}
                            onPress={() => this.goToPage(i)}
                            style={styles.subTab}
                            testID={`Contests-${ tab.key }`}
                        >
                            { this.isActivePage(i) ?
                                <Text style={{ ...styles.activeTabText, color: themes[theme].activeTintColor }}>{this.getTabText(tab)}</Text>
                                :
                                <Text style={{ ...styles.tabText, color: themes[theme].inactiveTintColor }}>{this.getTabText(tab)}</Text>
                            }
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }

    onSelectChatGroup = () => {
        const { showActionSheet } = this.props;
        showActionSheet({ options: this.fileOptions });
    }

    renderFooter = () => {
        const { theme } = this.props;
        const { currentTab } = this.state;

        if(currentTab === 1){
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.addGroupBtn, backgroundColor: themes[theme].dangerColor }}
                    onPress={this.onSelectChatGroup}
                >
                    <VectorIcon type={'MaterialCommunityIcons'} name='message-text' color={'white'} size={28} />
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={{ width: 110 }}
                    activeOpacity={0.5}
                    onPress={this.onCreateTeam}
                >
                    <Text style={styles.createBtnText}>CREAT TEAM</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render = () => {
        const {navigation, theme} = this.props;
        const { mounted } = this.state;
        return (
            <SafeAreaView style={styles.container} theme={theme}>
                <StatusBar/>
                <ScrollableTabView
                    key='Contests'
                    ref={ref => this.tabViewRef = ref}
                    renderTabBar={ this.renderTab }
                    initialPage={0}
                    contentProps={scrollProps}
                >
                    {
                        tabs.map((tab) => {
                            return this.renderTabContent(tab.key)
                        })
                    }
                </ScrollableTabView>
                { mounted ? this.renderFooter():null }
            </SafeAreaView>
        );
    }
}

export default withTheme(withActionSheet(ContestView));
