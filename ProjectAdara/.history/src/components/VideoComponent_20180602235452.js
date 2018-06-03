import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import BaseScreenComponent from './screens/BaseScreenComponent';

export default class VideoComponent extends Component {
    render() {
        return (
            <BaseScreenComponent>
                <VideoPlayerComponent/>
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
    render() {
        let title = this.props.navigation.title;
        return (
            <View>
                {/* <Text>{title}</Text> */}
                <Video
                    source={require('../../background.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}   
                    repeat={true}
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
                    style={styles.nativeVideoControls} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    nativeVideoControls: {
        top: 15,    //position on the screen (where does the top sit on the screen)
        height: 200 //this should be some function of the screen size
    }
});