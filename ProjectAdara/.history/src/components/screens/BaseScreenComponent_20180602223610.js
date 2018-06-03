import React, { Component } from 'react';
import { AppRegistry, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
            </SafeAreaView>
        );
    }
}