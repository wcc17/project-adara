import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //BaseScreen > ScrollScreen > Other screens
        //BaseScreen > Other screens
        return (
            let children = this.props.children;
            <SafeAreaView>
                {this.props.children}
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