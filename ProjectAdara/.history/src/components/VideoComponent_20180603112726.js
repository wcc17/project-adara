import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import BaseScreenComponent from './screens/BaseScreenComponent';

export default class VideoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Invalid Video'),
        };
    };
    
    render() {
        let title = 'test text above the video';
        
        return (
            <BaseScreenComponent>
                <View style={styles.videoPlayerView}>
                    <Text>test</Text>
                    <VideoPlayerComponent title={title}/>
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
    render() {

        return (
            // <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
                <Video
                    source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
                    ref={(ref) => {
                        this.player = ref
                    }}   
                    repeat={true}
                    style={styles.videoPlayer} 
                />
            // </TouchableOpacity>
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
                <Text style={[styles.controlOption, { fontWeight: isSelected ? "bold" : "normal" }]}>
                    {skin}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    // fullScreen: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    // },
    videoPlayer: {
        top: 15,    //position on the screen (where does the top sit on the screen)
        height: 200, //this should be some function of the screen size
        width: 150,
        justifyContent: 'center',
    },
    videoPlayerView: {
        flex: 1
    }
});