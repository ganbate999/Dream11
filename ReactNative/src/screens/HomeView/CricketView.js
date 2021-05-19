import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";
import MatchItem from "./MatchItem";
import {themes} from "../../constants/colors";

export default class CricketView extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        theme: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            matches: [
                {
                    id: 1,
                    league_name: 'MGM Odisha T20',
                    team_a: {
                        name: 'Odisha Cheetahs',
                        avatar: 'default',
                        symbol: 'ODC'
                    },
                    team_b: {
                        name: 'Odisha Pumas',
                        avatar: 'default',
                        symbol: 'OPU'
                    },
                    left_time: '24h',
                    is_live: true,
                    is_timing: true,
                    is_mega: true,
                    bit_amount: '1.5 Crores'
                },
                {
                    id: 2,
                    league_name: 'MGM Odisha T20',
                    team_a: {
                        name: 'Odisha Cheetahs',
                        avatar: 'default',
                        symbol: 'ODC'
                    },
                    team_b: {
                        name: 'Odisha Pumas',
                        avatar: 'default',
                        symbol: 'OPU'
                    },
                    left_time: '24h',
                    is_live: true,
                    is_timing: true,
                    is_mega: true,
                    bit_amount: '1.5 Crores'
                }
            ],
        }
    }

    onPressMatch = (match) => {
        const { navigation } = this.props;
        navigation.navigate('ContestView', { match: {...match} });
    }


    render = () => {
        const { theme } = this.props;
        const { matches } = this.state;
        return (
            <View
                key='Cricket'
                style={styles.tabContent}
            >
                <Text style={{ ...styles.listTitle, color: themes[theme].titleText }}>Upcoming Matches</Text>
                <FlatList
                    key={`cricket-matches`}
                    style={styles.matchList}
                    keyExtractor={item => item.id || item}
                    data={matches}
                    renderItem={({ item }) => {
                       return (<MatchItem data={item} onPress={ () => this.onPressMatch(item)} theme={theme}/>);
                    }}
                    initialNumToRender={10}
                    removeClippedSubviews
                />
            </View>
        );
    }
}
