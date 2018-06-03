import React, { Component } from 'react';
import { Text } from 'react-native';

//statics only work for react components
export default class Device extends Component {

    static DeviceType() {
        return {
            CAMERA: 1,
            MICROPHONE: 2,
            SENSOR: 3,
            LOCK: 4
        }
    }

    render() {
        return(
            <Text>{this.props.name}</Text>
        )
    }
}
