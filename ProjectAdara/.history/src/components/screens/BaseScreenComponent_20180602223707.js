import React, { Component } from 'react';
import { AppRegistry, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        //BaseScreen > ScrollScreen > Other screens
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
            
            </SafeAreaView>
        );
    }
}