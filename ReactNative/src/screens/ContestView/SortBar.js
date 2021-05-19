import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {VectorIcon} from "../../components/VectorIcon";
import {themes} from "../../constants/colors";

export default React.memo(({ theme }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sortBtns}>
                <Text style={{ ...styles.sortText, color: themes[theme].auxiliaryText }}>Sort By</Text>
                <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.7}
                    style={styles.sortBtn}
                    >
                    <Text style={{ color: themes[theme].bodyText }}>Entry</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.7}
                    style={styles.sortBtn}
                >
                    <Text style={{ color: themes[theme].bodyText }}>Contest Size</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.7}
                style={styles.sortFilter}
            >
                <Text style={{ color: themes[theme].bodyText, marginHorizontal: 8 }}>All Filters</Text>
                <VectorIcon type={'Ionicons'} name={'options'} size={24} color={themes[theme].bodyText}/>
            </TouchableOpacity>
        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1
    },
    sortBtns: {
        flexDirection: 'row'
    },
    sortText: {
        paddingTop: 4
    },
    sortBtn: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,
    },
    sortFilter: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
