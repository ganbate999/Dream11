import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Avatar from "../../components/Avatar";
import {themes} from "../../constants/colors";
import PropTypes from "prop-types";


export default class GroupRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewShow: true,
        }

    }

    static propsType = {
        title: PropTypes.string,
        avatar: PropTypes.string,
        unread: PropTypes.number,
        lastMessage: PropTypes.object,
        onPressItem: PropTypes.func,
        theme: PropTypes.string
    }

    render() {
        const { title, avatar, unread, onPressItem, lastMessage, theme } = this.props;
        const text = lastMessage?`${lastMessage.ownerName}: ${lastMessage.msg}`:'';
        const ts = lastMessage.ts;
        return (
            <TouchableOpacity style={[styles.container]} onPress={onPressItem}>
                <View style={styles.imageView}>
                    <Avatar
                        key='team-a-avatar'
                        style={{ ...styles.teamAvatarStyle, backgroundColor: themes[theme].inactiveTintColor }}
                        type={'g'}
                        borderRadius={28}
                        size={56}
                        text={avatar}/>
                    {
                        unread > 0?
                        <View style={styles.unread}>
                            <Text style={{color: 'white', fontSize: 12}}>{unread}</Text>
                        </View>
                        : null
                    }
                </View>
                <View style={[styles.textView]}>
                    <Text numberOfLines={1} style={[styles.title, {color: themes[theme].bodyText}]}>{title}</Text>
                    <Text numberOfLines={1} style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.iconView}>{ts}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#c8c8c8',
        paddingHorizontal: 8,
        flexDirection: 'row',
        width: '100%'
    },
    imageView: {
        padding: 8,
        alignItems: 'center'
    },
    textView: {
        flexGrow: 1,
        paddingLeft: 8,
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        width: '100%',
        paddingTop: '2%',

    },
    iconView: {
        paddingTop: 8
    },
    teamAvatarStyle: {

    },
    unread: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 7,
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

