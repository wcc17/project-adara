import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class DeviceSectionListButtonComponent extends Component {
    render() {
        let deviceId = this.props.device.id;
        let deviceName = this.props.device.name;
        return (
            <TouchableOpacity onPress={(device) => this.props.onClick(this.props.device)}>
                <View style={styles.viewStyle}>
                    <Text style={this.props.itemTextStyle}>{this.props.device}</Text>
                </View>
            </TouchableOpacity>
                // <Button
                //     title="Go to Video"
                //     onPress={() =>
                //         this.props.callback();
                //     }
                // />
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        // paddingTop: 22
    },
})
