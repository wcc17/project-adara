import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import BaseScreenComponent from '../components/BaseScreenComponent';
import DeviceListComponent from '../components/DeviceListComponent.js'
import Device from '../models/Device.js';

export default class DeviceListContainer extends Component {
    static navigationOptions = {
        title: 'DeviceList'
    }

    state = {
        isLoading: true,
    }

    componentDidMount() {
        return fetch('http://localhost:8080/deviceList?customerId=0123')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    deviceListResponse: responseJson,
                }, function() {
                    this.buildDeviceList();
                });
        })
        .catch((error) => {
            //TODO: show error, application just crashes here if rest service can't be reached
            //**see this guys ApiUtil: https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
            console.error(error);
        });
    }

    buildDeviceList() {
        var devices = [];
        var tempDeviceList = this.state.deviceListResponse;
        for(i = 0; i < tempDeviceList.length; i++) {
            devices.push(<Device id={tempDeviceList[i].id}
                type={tempDeviceList[i].type}
                name={tempDeviceList[i].name}/>
            );
        }

        this.setState({
            deviceList: devices,
            isLoading: false,
        })
    }

    getDeviceUrlAndHandleNavigation(device) {
        this.retrieveDeviceUrl(device);
    }

    retrieveDeviceUrl(device) {
        return fetch('http://localhost:8080/deviceUrl?customerId=0123&deviceId=' + device.props.id)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    isLoading: false,
                }, function() {
                    var deviceUrl = responseJson;
                    this.handleNavigationOnClick(device, responseJson);
                });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    /**
    * Used as a callback method in nested components to get to different homeScreenComponentStyle
    **/
    handleNavigationOnClick(device, url) {
        let deviceType = Device.DeviceType();

        switch(device.props.type) {
            case deviceType.CAMERA:
                this.props.navigation.navigate('Video', {
                    device: device,
                    deviceUrl: url,
                })
                break;
            case deviceType.MICROPHONE:
                break;
            case deviceType.SENSOR:
                break;
            case deviceType.LOCK:
                break;
        }
    }

    render() {
        if(this.state.isLoading == true) {
            return(
                //TODO: center in middle of screen
                <BaseScreenComponent>
                    <View styles={styles.isLoadingStyle}>
                        <ActivityIndicator/>
                    </View>
                </BaseScreenComponent>
            );
        } else {
            return(
                <BaseScreenComponent>
                    <DeviceListComponent
                        devices={this.state.deviceList}
                        onClick={(device) => this.getDeviceUrlAndHandleNavigation(device)} //=> is important as it causes function call to come from this scope instead of the nested component
                    />
                </BaseScreenComponent>
            );
        }
    }
}

const styles = StyleSheet.create({
    isLoadingStyle: {
        flex: 1,
        padding: 20
    },
});
