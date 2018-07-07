import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';

export default class VideoPlayerComponent extends Component {
    state = {
        paused: false,
        height: Dimensions.get('window').width / (16 / 9)
    }

    //TODO: should this be done in DeviceContainer and passed in to VideoPlayerComponent?
    renderSkinControl(skin) {
        const isSelected = this.state.skin == skin;
        const selectControls = skin == 'native' || skin == 'embed';
        return (
            <TouchableOpacity onPress={() => {
                this.setState({
                    controls: selectControls,
                    skin: skin
                })
            }}>
                <Text style={[videoPlayerStyles.controlOption, { fontWeight: isSelected ? "bold" : "normal" }]}>
                    {skin}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        let device = this.props.device;
        let url = this.props.url;
        let name = device.props.name;

        return (
            <View style={videoPlayerStyles.backgroundViewStyle}>
                <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
                    <Video
                        source={{uri: this.props.url}}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        repeat={true}
                        paused={this.state.paused}
                        style={videoPlayerStyles.videoPlayer, {height: this.state.height}}
                    />
                </TouchableOpacity>
            </View>

            // To set video position in seconds (seek)
            // this.player.seek(0);

            // const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
            // const videoStyle = styles.fullScreen;
        )
    }
}

const videoPlayerStyles = StyleSheet.create({
    backgroundViewStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
    }
});

const styles = StyleSheet.create({
    videoPlayerView: {
        flex: 1
    }
});
