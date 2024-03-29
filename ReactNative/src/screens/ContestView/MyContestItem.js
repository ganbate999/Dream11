import React from 'react';
import PropTypes from "prop-types";
import {TouchableOpacity, View, Text} from "react-native";
import styles from "./style";
import ProgressBar from 'react-native-progress/Bar';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {themes} from "../../constants/colors";
import {VectorIcon} from "../../components/VectorIcon";

export default class MyContestItem extends React.Component {

    static propTypes = {
        data: PropTypes.object,
        onPress: PropTypes.func,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }

    onShare = () => {

    }

    render = () => {
        const { data, onPress, theme } = this.props;
        const { width } = this.state;
        const { name, left_spots, all_spots, upto_entries, win_benefit, is_checked } = data;
        const progress_percent = 1 - (left_spots/all_spots);
        return (
            <TouchableOpacity
                onPress={() => onPress()}
                activeOpacity={0.8}
                style={{ ...styles.contestContainer, backgroundColor: themes[theme].focusedBackground }}
            >
                <View style={styles.contestItemHeader}>
                    <Text style={styles.contestName}>{name}</Text>
                    <TouchableOpacity
                        onPress={() => this.onShare(data)}>
                        <VectorIcon type={'Ionicons'} name={'share-social-outline'} size={24} color={'gray'} style={styles.markStyle} />
                    </TouchableOpacity>
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
                            <Text style={{ ...styles.markLabel, color: themes[theme].bodyText }}>{ win_benefit ? `₹${win_benefit}`:'Glory awaits!'}</Text>
                        </View>
                        <View style={styles.footerItem}>
                            <VectorIcon type={'Ionicons'} name={'md-pricetags-outline'} size={16} color={'gray'} style={styles.markStyle} />
                            <Text style={{ ...styles.markLabel, color: themes[theme].bodyText }}>{ (upto_entries && upto_entries>1) ? `Upto ${upto_entries} Entries`:'Single Entry'}</Text>
                        </View>
                    </View>
                    <View>
                        { is_checked ? <VectorIcon type={'MaterialCommunityIcons'} name={'checkbox-marked-circle-outline'} size={16} color={'gray'} style={styles.markStyle} /> : null}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
