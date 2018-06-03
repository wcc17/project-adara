import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <Text>This is the home screen</Text>

                    <Button 
                        title="Go to Video"
                        onPress{() =>
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