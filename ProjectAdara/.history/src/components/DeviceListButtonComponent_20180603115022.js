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
    viewStyle: {
        paddingTop: 22
    },
})