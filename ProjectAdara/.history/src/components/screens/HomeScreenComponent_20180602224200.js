import React, { Component } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

export default class HomeScreenComponent extends Component {
    // static navigationOptions = {
    //     title: 'Welcome',
    // };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }
}

// AppRegistry.registerComponent('HomeScreenComponent', () => HomeScreenComponent);