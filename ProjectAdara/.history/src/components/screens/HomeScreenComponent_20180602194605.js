import React, { Component } from 'react';
import { AppRegistry, Text, Button, SafeAreaView } from 'react-native';

export default class HomeScreenComponent extends Component {
    // static navigationOptions = {
    //     title: 'Welcome',
    // };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
                <Text>This is the home screen</Text>

                <ScrollView contentContainerStyle={styles.container}>
                    <BasicStuffComponent/>
                    <FlexDimensionsBasicsComponent style={flexDimensionStyleSheet.flexDimensionComponentStyle}/>
                    <AlignItemsComponent/>
                </ScrollView>

                <VideoComponent/>
            </SafeAreaView>
        );
    }
}

// AppRegistry.registerComponent('HomeScreenComponent', () => HomeScreenComponent);