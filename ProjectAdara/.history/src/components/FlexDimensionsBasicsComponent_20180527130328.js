import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionsBasicsComponent extends Component {
    render() {
        return (
            // what if you add 'height: 300' instead of 'flex: 1'?
            // <View style={{flex: 1}}>
            <View style={this.props.styleParam}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}