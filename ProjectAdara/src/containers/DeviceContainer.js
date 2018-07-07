import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseScreenComponent from '../components/BaseScreenComponent';
import DeviceInfoComponent from '../components/DeviceInfoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent';

export default class DeviceContainer extends Component {
    state = {
        device: this.props.navigation.getParam('device', null),
        deviceUrl: this.props.navigation.getParam('deviceUrl', null),
    }

    componentDidMount() {
        if(this.state.device == null || this.state.deviceUrl == null) {
            //TODO: error
            console.log("device or deviceURL is null in DeviceContainer. This should be caught");
        }
    }

    render() {
        return (
            <BaseScreenComponent>
                <View style={styles.viewStyle}>
                    //TODO: will eventually decide whether to use VideoPlayerComponent or another device component (mic, lock, whatever)
                    <VideoPlayerComponent
                        device={this.state.device}
                        url={this.state.deviceUrl}
                    />

                    <DeviceInfoComponent device={this.state.device}/>
                </View>
            </BaseScreenComponent>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
});
