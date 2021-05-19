import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    mainContainer: {
            flex:1,
        },
    headerView: {

        },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#e0e0e0'
    },
    input:{
        flexGrow: 1,
        paddingVertical: 2,
        paddingHorizontal: 12,
        fontSize: 14,
        borderRadius:14
    },
    sendBtn: {
        padding: 4,
        marginLeft: 8
    },
    actionBtn: {
        marginRight: 4
    }
});

