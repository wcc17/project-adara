import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VideoComponent from '../VideoComponent';

export default class VideoScreenComponent extends Component {

    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: {{navigation.getParam('title', 'Invalid Video'),}}
    //     };
    // };

    // static navigationOptions = {
    //     title: this.props.navigation.getParam('device').name
    // }

    render() {
        return (
            <View style={styles.viewStyle}>
                <VideoComponent
                    device={
                        this.props.navigation.getParam('device', null) //TODO: check for null?
                    }
                    // url={
                    //     this.props.navigation.getParam('url', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4')
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
});
