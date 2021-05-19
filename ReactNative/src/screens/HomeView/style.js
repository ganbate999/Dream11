import { StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1
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
    tabsContainer: {
        height: 72,
        flexDirection: 'row',
        paddingTop: 5
    },
    tab: {
        width: 82,
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
    listTitle: {
      marginHorizontal: 8,
      paddingTop: 8,
        paddingLeft: 4,
      fontWeight: 'bold',
        fontSize: 16
    },
    matchList:{

    },
    matchContainer: {
        margin: 8,
        paddingTop: 8,
        borderRadius: 8,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        elevation: 3,
    },
    matchItemHeader: {
        borderBottomWidth: 2,
        marginHorizontal: 16,
        borderBottomColor: '#eeeeee',
    },
    leagueName: {
        fontSize: 16,
        paddingVertical: 4
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    teamContainerA: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    teamContainerB: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    teamName: {
        fontSize: 12,
        marginHorizontal: 16,
        paddingVertical: 4
    },
    teamMark: {
        flex: 1,
        paddingVertical: 4,
        flexDirection: 'row'
    },
    teamAvatarStyle: {

    },
    teamSymbol:{
        fontWeight: 'bold'
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    matchTime: {
        color: 'red'
    },
    matchItemFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    megaMark: {
        backgroundColor: '#b4d0be',
        borderColor: '#235323',
        borderWidth: 1,
        borderRadius: 4,
        color: '#235323',
        fontSize: 8,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 4,
        marginRight: 8
    },
    bitAmount: {
        fontSize: 12
    },
    footerItem: {
        flexDirection: 'row'
    },
    markStyle: {
        marginLeft: 12
    }
});
