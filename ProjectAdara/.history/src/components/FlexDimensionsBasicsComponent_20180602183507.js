import React, { Component } from 'react';
import { AppRegistery, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // try removing the 'flex: 1' on the parent View.
            // the parent will not have dimensions, so the children can't expand.
            // what if you add 'height: 300' instead of 'flex: 1'?
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

AppRegistery.registerComponent('FlexDimensionsBasics', () => FlexDimensionsBasics);