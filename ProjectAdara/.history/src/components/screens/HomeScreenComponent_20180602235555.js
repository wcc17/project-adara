import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';

export default class HomeScreenComponent extends Component {
    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <Text>This is the home screen</Text>

                    <Button 
                        title="Go to Video"
                        onPress={() =>
                            this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
                        }
                    />

                {/* 
                    <BasicStuffComponent/>
                    <FlexDimensionsBasicsComponent style={flexDimensionStyleSheet.flexDimensionComponentStyle}/>
                    <AlignItemsComponent/>

                    <VideoComponent/> */}

                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }
}