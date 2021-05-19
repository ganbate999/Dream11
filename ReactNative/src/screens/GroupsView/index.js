import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { connect } from 'react-redux';
import { MenuButton } from "../../components/header/header";
import styles from "./style";
import SafeAreaView from "../../components/SafeAreaView";
import StatusBar from "../../components/StatusBar";
import {withTheme} from "../../theme";
import PropTypes from "prop-types";
import GroupRoom from "./GroupRoom";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {themes} from "../../constants/colors";

class GroupsView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => <MenuButton onPress={() => navigation.openDrawer()} />,
            title: 'Groups',
            headerLayoutPreset: "center"
        };
    };

    static propsType = {
        navigation: PropTypes.object,
        user: PropTypes.object,
        theme: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: [
                {
                    id: '1',
                    name: 'Group1',
                    avatar: 'default',
                    unread: 0,
                    lastMessage: {
                        ownerId: '1',
                        ownerName: 'You',
                        msg: 'Test Message',
                        ts: '1/8'
                    }
                },
                {
                    id: '2',
                    name: 'Group2',
                    avatar: 'default',
                    unread: 1,
                    lastMessage: {
                        ownerId: '2',
                        ownerName: 'Timon',
                        msg: 'Test Message',
                        ts: '1/6'
                    }
                }
            ]
        };
    }

    listRooms(item) {
        const { navigation, user, theme } = this.props;
        return (
            <GroupRoom
                title={item.name}
                avatar={item.avatar}
                icon={null}
                unread={item.unread}
                lastMessage={item.lastMessage}
                onPressItem={() => navigation.navigate('ChatRoomView', { room: item })}
                theme={theme}
            />
        )
    }

    onAddNewGroup = () => {
        const { navigation } = this.props;
        navigation.navigate('CreateNewGroupView');
    }

    render() {
        const { rooms } = this.state;
        const { theme } = this.props;
        return (
            <SafeAreaView theme={theme} style={{ ...styles.container, backgroundColor: themes[theme].backgroundColor }}>
                <StatusBar/>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    data={ rooms }
                    renderItem={({ item }) => this.listRooms(item)}
                    keyExtractor={item => `${item.id}`}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.addGroupBtn, backgroundColor: themes[theme].dangerColor }}
                    onPress={this.onAddNewGroup}
                >
                    <MaterialCommunityIcons name='account-multiple-plus' color={'white'} size={30} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    user: state.login.user,
});

export default connect(mapStateToProps, null)(withTheme(GroupsView));
