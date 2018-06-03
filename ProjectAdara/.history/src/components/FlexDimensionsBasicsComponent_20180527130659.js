import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionsBasicsComponent extends Component {
    render() {
        return (
            //a height and width should be passed in with style prop
            // <View style={{flex: 1}}>
            <View style={this.props.style}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}