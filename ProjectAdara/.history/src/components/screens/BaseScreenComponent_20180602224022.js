import React, { Component } from 'react';
import { AppRegistry, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    render() {
        //BaseScreen > ScrollScreen > Other screens
        //BaseScreen > Other screens
        return (
            <SafeAreaView>
            
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});