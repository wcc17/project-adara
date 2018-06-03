import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import BaseScreenComponent from './screens/BaseScreenComponent';
import DeviceInfoComponent from './DeviceInfoComponent';

export default class VideoComponent extends Component {

    render() {
        console.log(this.props.device);
        let device = this.props.device;
        let name = device.props.name;
        let url = device.props.url;

        return (
            <BaseScreenComponent>
                <View style={styles.videoPlayerView}>
                    <VideoPlayerComponent url={url}/>
                    <DeviceInfoComponent device={device}/>
                </View>
            </BaseScreenComponent>

            // Later to trigger fullscreen
            // this.player.presentFullscreenPlayer();

            // Disable fullscreen
            // this.player.dismissFullscreenPlayer();

            // To set video position in seconds (seek)
            // this.player.seek(0);

            // const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
            // const videoStyle = styles.fullScreen;
        )
    }
}

class VideoPlayerComponent extends Component {
    state = {
        paused: false,
        height: Dimensions.get('window').width / (16 / 9)
    }

    render() {
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
        )
    }

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
}

const videoPlayerStyles = StyleSheet.create({
    // fullScreen: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    // },
    videoPlayer: {
    },
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
