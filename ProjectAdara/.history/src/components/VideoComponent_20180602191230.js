import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
    render() {
        const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;

        // Within your render function, assuming you have a file called
        // "background.mp4" in your project. You can include multiple videos
        // on a single screen if you like.
        return (
            <View style={styles.container}>
                <View style={styles.fullScreen}>
                    <Video 
                    source={require('../../background.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    // rate={1.0}                              // 0 is paused, 1 is normal.
                    // volume={1.0}                            // 0 is muted, 1 is normal.
                    // muted={true|false}                      // Mutes the audio entirely. Default false
                    // paused={true|false}                     // Pauses playback entirely. Default false
                    // resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                    // repeat={true|false}                     // Repeat forever. Default false
                    // playInBackground={true|false}           // Audio continues to play when app entering background. Default false
                    // playWhenInactive={true|false}           // [iOS] Video continues to play when control or notification center are shown. Default false
                    // ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                    // progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    // onEnd={this.onEnd}                      // Callback when playback finishes
                    // onError={this.videoError}               // Callback when video cannot be loaded
                    // onFullscreenPlayerWillPresent={this.fullScreenPlayerWillPresent} // Callback before fullscreen starts
                    // onFullscreenPlayerDidPresent={this.fullScreenPlayerDidPresent}   // Callback after fullscreen started
                    // onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss} // Callback before fullscreen stops
                    // onFullscreenPlayerDidDismiss={this.fullScreenPlayerDidDissmiss}  // Callback after fullscreen stopped
                    // onLoadStart={this.loadStart}            // Callback when video starts to load
                    // onLoad={this.setDuration}               // Callback when video loads
                    // onProgress={this.setTime}               // Callback every ~250ms with currentTime
                    // onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                    style={video} />
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