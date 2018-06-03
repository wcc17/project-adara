import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        return (
            ///justifyContent: 'flex-end'
            //flexDirection: row
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

AppRegistery.registerComponent('FlexDimensionsBasics', () => FlexDimensionsBasics);