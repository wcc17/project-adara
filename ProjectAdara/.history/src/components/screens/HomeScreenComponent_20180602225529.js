import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import BaseScreenComponent from './screens/BaseScreenComponent';
import ScrollScreenComponent from './screens/ScrollScreenComponent';

export default class HomeScreenComponent extends Component {
    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <Text>This is the home screen</Text>

                    <Button 
                        title="Go to Video"
                        onPress={() =>
                            navigate('Video', { cameraName: 'Indoor Camera' })
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