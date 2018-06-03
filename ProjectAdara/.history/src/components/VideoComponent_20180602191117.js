import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
    render() {
        // Within your render function, assuming you have a file called
        // "background.mp4" in your project. You can include multiple videos
        // on a single screen if you like.
        return (
            <View style={styles.container}>
                <View style={styles.fullScreen}>
                </View>
            </View>
            
            // Later to trigger fullscreen
            // this.player.presentFullscreenPlayer();
            
            // Disable fullscreen
            // this.player.dismissFullscreenPlayer();
            
            // To set video position in seconds (seek)
            // this.player.seek(0);
        )
    }
}

const videoStyleSheet = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});