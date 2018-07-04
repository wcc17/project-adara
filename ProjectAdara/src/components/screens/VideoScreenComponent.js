import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VideoComponent from '../video/VideoComponent';

export default class VideoScreenComponent extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <VideoComponent
                    device={
                        this.props.navigation.getParam('device', null) //TODO: check for null?
                    }
                    url={
                        this.props.navigation.getParam('deviceUrl', null)
                    }
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
