import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';
import FlexDimensionsBasicsComponent from '../FlexDimensionsBasicsComponent';
import AlignItemsComponent from '../AlignItemsComponent';
import TouchableSectionListComponent from '../TouchableSectionListComponent';
import Device from '../../models/Device';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    
    state = {
        //TODO: will eventually be loaded via REST api and will have its own model object
        deviceList: [new Device(Device.DeviceType.CAMERA, 'Camera 1')];
    }

    //TODO: maybe the first thing to move to its own container and leave rendering to component
    handleNavigationOnClick() {
        this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
    }

    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <TouchableSectionListComponent onClick={this.handleNavigationOnClick}/>
                    </View>
                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }
}

const styles = StyleSheet.create({
    homeScreenComponentStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
    },
});