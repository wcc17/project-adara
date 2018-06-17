import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import DeviceSectionListButtonComponent from './DeviceSectionListButtonComponent';
import Device from '../../models/Device';

export default class DeviceSectionListComponent extends Component {
    render() {
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

        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'Cameras', data: cameras },
                        { title: 'Sensors', data: sensors },
                        { title: 'Microphones', data: microphones },
                        { title: 'Locks', data: locks }
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 22
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
})
