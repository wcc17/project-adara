import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
// import FlexDimensionsBasicsComponent from './src/components/FlexDimensionsBasicsComponent';
// import AlignItemsComponent from './src/components/AlignItemsComponent';
import VideoScreenComponent from './src/components/screens/VideoScreenComponent';
import HomeScreenComponent from './src/components/screens/HomeScreenComponent';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native'

export default class ProjectAdara extends React.Component {
    render() {
        ignoreWarnings();

        return <Root />
    }
}

const Root = createStackNavigator(
    {
        Home: HomeScreenComponent,
        Video: VideoScreenComponent,
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
