import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        //BaseScreen > ScrollScreen > Other screens
        //BaseScreen > Other screens
        return (
            <SafeAreaView>
                {props.children}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffff',
    }
});