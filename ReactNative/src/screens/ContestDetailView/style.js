import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    contestData: {

    },
    tabBarContainer: {
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        elevation: 3,
        paddingHorizontal: 4
    },
    subTabsContainer:{
        height: 48,
        flexDirection: 'row',
        paddingTop: 5,
        flex: 1
    },
    subTab : {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeTab: {
        width: 82,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
    },
    tabText: {
        fontSize: 14,
        paddingBottom: 2
    },
    activeTabText: {
        fontSize: 14,
        paddingBottom: 2,
        fontWeight: 'bold',
    },
    tabContent: {
        flex: 1,
        paddingVertical: 4
    },
    listNote: {
        paddingLeft: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c8c8c8',
        paddingVertical: 8,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c8c8c8',
        paddingVertical: 8,
    },
    listHeaderTitle: {

    },
    contestList: {

    },
    listItemContainter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c8c8c8'
    },
    listItemLeaderboardContainter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c8c8c8'
    },
    teamAvatarStyle: {
        backgroundColor: 'gray',
        marginRight: 8
    },
    leaderboardMark:{
        borderRadius: 2,
        backgroundColor: '#bcbcbc',
        color: '#585858',
        fontSize: 8,
        marginLeft: 8,
        paddingHorizontal: 4
    },
    contestRank: {
        paddingLeft: 8,
        flexDirection: 'row'
    },
    contestPrice :{
        paddingRight: 8
    },
    allAmount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    amount: {
        backgroundColor: '#18ac3d',
        borderRadius: 4,
        color: 'white',
        fontSize: 14,
        paddingVertical: 2,
        paddingHorizontal: 4,
        marginRight: 8
    },
    contestItemHeader: {
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contestName: {
        fontSize: 16,
        paddingVertical: 4
    },
    contestContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    progress: {
        marginTop: 8,
        marginHorizontal: 12
    },
    contestItemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    leftSpots: {
    },
    allSpots: {

    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14
    },
    markStyle: {
        marginLeft: 12
    },
    markLabel: {
        marginLeft: 4
    }
});
