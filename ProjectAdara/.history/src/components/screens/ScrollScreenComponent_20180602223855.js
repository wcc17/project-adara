import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        <ScrollView contentContainerStyle={styles.container}>
            {props.children}
        </ScrollView>
    }
}