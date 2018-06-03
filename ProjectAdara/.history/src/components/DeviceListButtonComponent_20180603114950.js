import React, { Component } from 'react';
import { Button, StyleSheet, Button, View } from 'react-native';

export default class DeviceSectionListComponent extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Button 
                            title="Go to Video"
                            onPress={() =>
                                this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
                            }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})