import React from "react";
import {StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import {withTheme} from "../theme";
import Avatar from "../components/Avatar";
import {themes} from "../constants/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TextInput from "../components/TextInput";
import scrollPersistTaps from "../utils/scrollPersistTaps";
import sharedStyles from "./Styles";
import KeyboardView from "../components/KeyboardView";
import StatusBar from "../components/StatusBar";
import Button from "../components/Button";
import ImagePicker from "react-native-image-crop-picker";

const imagePickerConfig = {
    cropping: true,
    compressImageQuality: 0.8,
    enableRotationGesture: true,
    avoidEmptySpaceAroundImage: false,
    cropperChooseText: 'Choose',
    cropperCancelText: 'Cancel',
    mediaType: 'photo',
    includeBase64: true
};

class CreateNewGroupView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "New Group",
        };
    };

    static propsType = {
        theme: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            avatar: {},
            name: ''
        }
    }

    onChooseImage = async () => {
        try {
            await ImagePicker.clean();
            const image = await ImagePicker.openPicker(imagePickerConfig);
            this.setState({
                avatar : {
                    url: image.path,
                    data: `data:image/jpeg;base64,${ image.data }`
                }
            })
        } catch (e) {
            log(e, "Take Photo By Picker Error: ");
        }
    }

    onCreate = () => {

    }

    render() {
        const { avatar } = this.state;
        const { theme } = this.props;
        return (
            <KeyboardView
                contentContainerStyle={{ ...sharedStyles.container, backgroundColor: themes[theme].backgroundColor }}
                keyboardVerticalOffset={128}
            >
                <StatusBar />
                <ScrollView {...scrollPersistTaps} contentContainerStyle={styles.containerScrollView}>
                    <TouchableOpacity style={styles.imageView} onPress={() => this.onChooseImage()}>
                      <Avatar
                          key='team-a-avatar'
                          style={{ ...styles.teamAvatarStyle, backgroundColor: themes[theme].inactiveTintColor }}
                          type={'g'}
                          borderRadius={48}
                          size={96}
                          isStatic={!!(avatar.data)}
                          avatar={avatar.url??'default'}/>
                      <View style={styles.attachIcon}>
                          <FontAwesome name={'camera'} size={16} color={'black'}/>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput
                          inputRef={(e) => { this.nameInput = e; }}
                          label={'Name'}
                          placeholder={'Name'}
                          returnKeyType='default'
                          onChangeText={name => this.setState({name})}
                          onSubmitEditing={() => this.descriptionInput.focus()}
                          theme={theme}
                        />
                        <TextInput
                          inputRef={(e) => { this.descriptionInput = e; }}
                          label={'Description'}
                          placeholder={'Description'}
                          returnKeyType='default'
                          inputStyle={styles.descriptionInput}
                          onChangeText={description => this.setState({description})}
                          onSubmitEditing={this.onCreate}
                          theme={theme}
                        />
                        <View style={{ alignItems: 'center', marginTop: 8 }}>
                            <Button
                                title={'Create New'}
                                type='done'
                                size='W'
                                onPress={this.onCreate}
                                theme={theme}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScrollView: {
        alignItems: 'center',
    },
    imageView: {
        width: 96,
        justifyContent: 'center',
        marginVertical: 20
    },
    teamAvatarStyle: {

    },
    inputContainer: {
        width: '90%',
        marginTop: 12
    },
    descriptionInput: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: '#e7e7e7'
    },
    attachIcon: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        borderRadius: 14,
        padding: 4,
        backgroundColor: '#ececec',
        borderWidth: StyleSheet.hairlineWidth
    }
});

export default withTheme(CreateNewGroupView);
