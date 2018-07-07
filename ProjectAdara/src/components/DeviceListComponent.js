import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, SectionList, Text } from 'react-native';
import ScrollScreenComponent from './ScrollScreenComponent';
import DeviceSectionListButtonComponent from './DeviceSectionListButtonComponent';
import Device from '../models/Device.js';

export default class DeviceListComponent extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.buildDeviceListSections();
    }

    buildDeviceListSections() {
        let deviceList = this.props.devices;

        let cameras = [];
        let microphones = [];
        let sensors = [];
        let locks = [];
        let deviceType = Device.DeviceType();
        for(i = 0; i < deviceList.length; i++) {
            switch(deviceList[i].props.type) {
                case deviceType.CAMERA:
                    cameras.push(deviceList[i]);
                    break;
                case deviceType.MICROPHONE:
                    microphones.push(deviceList[i]);
                    break;
                case deviceType.SENSOR:
                    sensors.push(deviceList[i]);
                    break;
                case deviceType.LOCK:
                    locks.push(deviceList[i]);
                    break;
            }
        }

        this.setState({
            cameraList: cameras,
            microphoneList: microphones,
            sensorList: sensors,
            lockList: locks,
            isLoading: false,
        })
    }

    render() {
        if(this.state.isLoading == true) {
            return(
                <View/>
            );
        } else {
            return (
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <SectionList
                            sections={[
                                { title: 'Cameras', data: this.state.cameraList },
                                { title: 'Sensors', data: this.state.sensorList },
                                { title: 'Microphones', data: this.state.microphoneList },
                                { title: 'Locks', data: this.state.lockList }
                            ]}

                            //passing 'item' as renderItem, which will be one of the devices in the prop arrays
                            renderItem={({ item }) =>
                                <DeviceSectionListButtonComponent device={item} itemTextStyle={styles.itemText} onClick={(device) => this.props.onClick(device)}/>
                            }
                            renderSectionHeader={({ section }) =>
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                            }
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </ScrollScreenComponent>
            );
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    itemText: {
        padding: 10,
        fontSize: 20,
        height: 44,
    },
});
