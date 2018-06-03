import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import DeviceSectionListButtonComponent from './DeviceSectionListButtonComponent';

export default class DeviceSectionListComponent extends Component {
    render() {
        console.log(this.props.cameras);
        console.log(this.props.sensors);
        console.log(this.props.microphones);
        console.log(this.props.locks);
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'Cameras', data: this.props.cameras },
                        { title: 'Sensors', data: this.props.sensors },
                        { title: 'Microphones', data: this.props.microphones },
                        { title: 'Locks', data: this.props.locks }
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
