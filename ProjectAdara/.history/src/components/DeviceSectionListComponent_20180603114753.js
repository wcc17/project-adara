import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class DeviceSectionListComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'Cameras', data: ['Camera 1', 'Camera 2', 'Camera 3'] },
                        { title: 'Sensors', data: ['Sensor 1', 'Sensor 2'] },
                        { title: 'Microphones', data: ['Microphone 1', 'Microphone 2', 'Microphone 3'] },
                    ]}
                    renderItem={({ item }) =>
                        <Text style={styles.item}>{item}</Text>
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
    // container: {
    //     flex: 1,
    //     paddingTop: 22
    // },
    // sectionHeader: {
    //     paddingTop: 2,
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     paddingBottom: 2,
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     backgroundColor: 'rgba(247,247,247,1.0)',
    // },
    // item: {
    //     padding: 10,
    //     fontSize: 18,
    //     height: 44,
    // },
})