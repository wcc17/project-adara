import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';
import FlexDimensionsBasicsComponent from '../FlexDimensionsBasicsComponent';
import AlignItemsComponent from '../AlignItemsComponent';
import DeviceSectionListComponent from '../DeviceSectionListComponent';
import Device from '../../models/Device.js';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        var cameras = [
            <Device type={Device.DeviceType().CAMERA} name='Camera 1' url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'/>,
            <Device type={Device.DeviceType().CAMERA} name='Camera 2' url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'/>,
            <Device type={Device.DeviceType().CAMERA} name='Camera 3' url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'/>,
        ]
        var microphones = [
            <Device type={Device.DeviceType().MICROPHONE} name='Microphone 1'/>,
            <Device type={Device.DeviceType().MICROPHONE} name='Microphone 2'/>,
        ]
        var sensors = [
            <Device type={Device.DeviceType().SENSOR} name='Sensor 1'/>,
            <Device type={Device.DeviceType().SENSOR} name='Sensor 2'/>,
            <Device type={Device.DeviceType().SENSOR} name='Sensor 3'/>,
            <Device type={Device.DeviceType().SENSOR} name='Sensor 4'/>,
            <Device type={Device.DeviceType().SENSOR} name='Sensor 5'/>,
        ]
        var locks = [
            <Device type={Device.DeviceType().LOCK} name='Lock 1'/>,
        ]

        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <DeviceSectionListComponent
                            onClick={(device) => this.handleNavigationOnClick(device)} //=> is imortant as it causes function call to come from this scope instead of the nested component
                            cameras={cameras}
                            microphones={microphones}
                            sensors={sensors}
                            locks={locks}
                        />
                    </View>
                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }

    /**
    * Used as a callback method in nested components to get to different homeScreenComponentStyle
    **/
    handleNavigationOnClick(device) {
        let deviceType = Device.DeviceType();

        //TODO: maybe the first thing to move to its own container and leave rendering to component
        switch(device.props.type) {
            case deviceType.CAMERA:
                console.log('is camera');
                this.props.navigation.navigate('Video', { device })
                break;
            case deviceType.MICROPHONE:
                console.log('is microphone');
                break;
            case deviceType.SENSOR:
                console.log('is sensor');
                break;
            case deviceType.LOCK:
                console.log('is lock');
                break;
        }
    }
}

const styles = StyleSheet.create({
    homeScreenComponentStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
    },
});
