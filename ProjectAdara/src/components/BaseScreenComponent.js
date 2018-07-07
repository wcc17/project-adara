import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class BaseScreenComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Generally base screen component should be used in the container, not in the component
        //BaseScreen > ScrollScreen > Other screens
        //BaseScreen > Other screens
        let children = this.props.children;
        return (
            <SafeAreaView style={styles.baseScreenView}>
                {children}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    baseScreenView: {
        flex: 1,
        backgroundColor: '#ffff',
    }
});
