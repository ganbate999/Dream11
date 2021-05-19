import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 0.33,
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
    listDescription: {
        marginHorizontal: 8,
        fontSize: 14,
        paddingLeft: 4,
    },
    contestList:{

    },
    contestContainer: {
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
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
    },
    btnContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 12,
        alignItems: 'center',
    },
    addGroupBtn: {
        position: 'absolute',
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,
        right: 20,
        bottom: 20
    },
    createBtnText: {
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#35c33b',
        color: '#35c33b',
        paddingVertical: 4,
        paddingHorizontal: 12
    }
});
