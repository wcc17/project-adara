import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        <ScrollView contentContainerStyle={styles.container}>
            {props.children}
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, will force it to fit inside the parent SafeAreaView
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        // justifyContent: 'center',
    }
);