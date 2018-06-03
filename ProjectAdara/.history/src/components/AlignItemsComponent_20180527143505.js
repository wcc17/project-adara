import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        return (
            ///justifyContent: 'flex-end'
            //flexDirection: row
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',

                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}