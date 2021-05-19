import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1
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
    }
});
