import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';

export default class ScrollScreenComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children = this.props.children;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {children}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        // justifyContent: 'center',
    }
});