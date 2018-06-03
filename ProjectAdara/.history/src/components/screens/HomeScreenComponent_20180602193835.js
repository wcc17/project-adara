import React, { Component } from 'react';
import { AppRegistry, Text, Button } from 'react-native';

class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            // <Button 
            //     title="Go to Video"
            //     onPress{() =>
            //         navigate('Video', { cameraName: 'Indoor Camera' })
            //     }
            // />
            <Text>This is the home screen</Text>
        );
    }
}

AppRegistry.registerComponent('HomeScreenComponent', () => HomeScreenComponent);