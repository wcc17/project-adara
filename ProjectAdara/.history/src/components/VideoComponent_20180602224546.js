import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
    render() {
        <BaseScreenComponent>
        </BaseScreenComponent>
        // const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
        // const videoStyle = styles.fullScreen;

        // Within your render function, assuming you have a file called
        // "background.mp4" in your project. You can include multiple videos
        // on a single screen if you like.
        return (
            
            
            // Later to trigger fullscreen
            // this.player.presentFullscreenPlayer();
            
            // Disable fullscreen
            // this.player.dismissFullscreenPlayer();
            
            // To set video position in seconds (seek)
            // this.player.seek(0);
        )
    }
}

class VideoPlayerComponent extends Component {
    render() {
        return (

        )
    }
}

const styles = StyleSheet.create({
    videoStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});