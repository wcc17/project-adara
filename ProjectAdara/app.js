import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native'
import DeviceContainer from './src/containers/DeviceContainer';
import DeviceListContainer from './src/containers/DeviceListContainer';

export default class ProjectAdara extends React.Component {
    render() {
        ignoreWarnings();

        return <Root />
    }
}

const Root = createStackNavigator(
    {
        Home: DeviceListContainer,
        Video: DeviceContainer,
    },
    {
        initialRouteName: 'Home',
    }
);

function ignoreWarnings() {
    //isMounted is deprecated until react-native is updated
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
}

AppRegistry.registerComponent('ProjectAdara', () => ProjectAdara);
