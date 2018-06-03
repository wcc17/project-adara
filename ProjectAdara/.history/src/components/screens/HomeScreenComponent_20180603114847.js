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
    
    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <Button 
                            title="Go to Video"
                            onPress={() =>
                                this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
                            }
                        />

                        <DeviceSectionListComponent/>

                        //TODO: stuff to remove
                        {/* <BasicStuffComponent/>
                        <FlexDimensionsBasicsComponent style={flexDimensionStyleSheet.flexDimensionComponentStyle}/>
                        <AlignItemsComponent/> */}

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