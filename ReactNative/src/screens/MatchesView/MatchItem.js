import React from 'react';
import PropTypes from "prop-types";
import {TouchableOpacity, View, Text} from "react-native";
import styles from "./style";
import Avatar from "../../components/Avatar/Avatar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {themes} from "../../constants/colors";
import {VectorIcon} from "../../components/VectorIcon";

export default class MatchItem extends React.Component {

    static propTypes = {
        data: PropTypes.object,
        onPress: PropTypes.func,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render = () => {
        const { data, onPress, theme } = this.props;
        const { } = this.state;
        const { league_name, team_a, team_b, left_time, is_live, is_timing, team_count, contest_count, allow_notify } = data;
        return (
            <TouchableOpacity
                onPress={() => onPress()}
                activeOpacity={0.8}
                style={{ ...styles.matchContainer, backgroundColor: themes[theme].focusedBackground }}
            >
                <View style={styles.matchItemHeader}>
                    <Text style={styles.leagueName}>{league_name}</Text>
                    { allow_notify ? <VectorIcon type={'MaterialCommunityIcons'} name={'bell-plus-outline'} size={16} color={'gray'} style={styles.markStyle} /> : null}
                </View>
                <View style={styles.teamsContainer}>
                    <View style={styles.teamContainerA}>
                        <Text style={{ ...styles.teamName, color: themes[theme].bodyText }}>{team_a.name}</Text>
                        <View style={styles.teamMark}>
                            <Avatar
                                key='team-a-avatar'
                                style={styles.teamAvatarStyle}
                                type={'c'}
                                size={24}
                                text={team_a.avatar}
                            />
                            <Text style={{ ...styles.teamSymbol, color: themes[theme].bodyText }}>{team_a.symbol}</Text>
                        </View>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.matchTime}>{left_time}</Text>
                    </View>
                    <View style={styles.teamContainerB}>
                        <Text style={{ ...styles.teamName, color: themes[theme].bodyText }}>{team_b.name}</Text>
                        <View style={styles.teamMark}>
                            <Text style={{ ...styles.teamSymbol, color: themes[theme].bodyText }}>{team_b.symbol}</Text>
                            <Avatar
                                key='team-a-avatar'
                                style={styles.teamAvatarStyle}
                                type={'c'}
                                size={24}
                                text={team_b.avatar}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.matchItemFooter, backgroundColor: themes[theme].auxiliaryBackground }}>
                    <View style={styles.footerItem}>
                        { team_count ? <Text style={{ ...styles.count, color: themes[theme].bodyText }}>{`${team_count} ${team_count>1?'Teams':'Team'}`}</Text> : null }
                        { contest_count ? <Text style={{ ...styles.count, color: themes[theme].bodyText }}>{`${contest_count} ${contest_count>1?'Contests':'Contest'}`}</Text> : null }
                    </View>
                    <View style={styles.footerItem}>
                        { is_live ? <VectorIcon type={'MaterialIcons'} name={'live-tv'} size={16} color={'gray'} style={styles.markStyle} /> : null}
                        { is_timing ? <VectorIcon type={'MaterialCommunityIcons'} name={'account-clock-outline'} size={16} color={'gray'} style={styles.markStyle}/> : null}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
