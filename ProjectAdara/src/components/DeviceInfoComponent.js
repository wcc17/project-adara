import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class DeviceInfoComponent extends Component {
    state = {
        deviceTypeString: this.getDeviceTypeString(this.props.device.props.type),
    }

    render() {
        let device = this.props.device;
        return (
            <View>
                <Text>Device Name: {device.props.name}</Text>
                <Text>Device Type: {this.state.deviceTypeString}</Text>
            </View>
        )
    }

    getDeviceTypeString(deviceType) {
        switch(deviceType) {
            case 1:
                return 'Camera';
            case 2:
                return 'Microphone';
            case 3:
                return 'Sensor';
            case 4:
                return 'Lock';
        }
    }
}
