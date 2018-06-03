import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';
import FlexDimensionsBasicsComponent from '../FlexDimensionsBasicsComponent';
import AlignItemsComponent from '../AlignItemsComponent';
import DeviceSectionListComponent from '../DeviceSectionListComponent';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    //TODO: maybe the first thing to move to its own container and leave rendering to component
function
this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
    
    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <DeviceSectionListComponent/>
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