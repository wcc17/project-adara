import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';
import DeviceSectionListComponent from '../device/DeviceSectionListComponent';
import Device from '../../models/Device.js';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    state = {
        isLoading: true,
    }

    componentDidMount() {
        return fetch('http://localhost:8080/deviceList?customerId=0123')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    deviceList: responseJson,
                }, function() {
                    //do something with the return json here?
                    //this happens after render method completes
                });
        })
        .catch((error) => {
            //TODO: show error, application just crashes here if rest service can't be reached
            //**see this guys ApiUtil: https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
            console.error(error);
        });
    }

    render() {
        if(this.state.isLoading == true) {
            return(
                //TODO: center in middle of screen
                <View styles={styles.isLoadingStyle}>
                    <ActivityIndicator/>
                </View>
            )
        }

        var devices = [];
        var deviceList = this.state.deviceList;
        for(i = 0; i < deviceList.length; i++) {
            devices.push(<Device id={deviceList[i].deviceId}
                type={deviceList[i].deviceType}
                name={deviceList[i].deviceName}
                url={deviceList[i].deviceUrl}/>
            );
        }

        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <DeviceSectionListComponent
                            onClick={(device) => this.handleNavigationOnClick(device)} //=> is imortant as it causes function call to come from this scope instead of the nested component
                            devices={devices}
                        />
                    </View>
                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }

    /**
    * Used as a callback method in nested components to get to different homeScreenComponentStyle
    **/
    handleNavigationOnClick(device) {
        let deviceType = Device.DeviceType();

        //TODO: maybe the first thing to move to its own container and leave rendering to component
        switch(device.props.type) {
            case deviceType.CAMERA:
                this.props.navigation.navigate('Video', { device })
                break;
            case deviceType.MICROPHONE:
                break;
            case deviceType.SENSOR:
                break;
            case deviceType.LOCK:
                break;
        }
    }
}

const styles = StyleSheet.create({
    isLoadingStyle: {
        flex: 1,
        padding: 20,
    },
    homeScreenComponentStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
    },
});
