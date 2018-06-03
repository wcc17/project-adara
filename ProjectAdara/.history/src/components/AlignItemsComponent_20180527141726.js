import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        reutrn (
            //try alignItems: 'flex-start'
            ///justifyContent: 'flex-end'
            //flexDirection: row
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        )
    }
}