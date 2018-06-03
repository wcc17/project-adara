import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import BaseScreenComponent from './BaseScreenComponent';
import ScrollScreenComponent from './ScrollScreenComponent';
import FlexDimensionsBasicsComponent from '../FlexDimensionsBasicsComponent';
import AlignItemsComponent from '../AlignItemsComponent';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    
    render() {
        return (
            <BaseScreenComponent>
                <ScrollScreenComponent>
                    <View styles={styles.homeScreenComponentStyle}>
                        <Text>This is the home screen</Text>

                        <Button 
                            title="Go to Video"
                            onPress={() =>
                                this.props.navigation.navigate('Video', { title: 'Indoor Camera' })
                            }
                        />

                        <BasicStuffComponent/>
                        <FlexDimensionsBasicsComponent style={flexDimensionStyleSheet.flexDimensionComponentStyle}/>
                        <AlignItemsComponent/>

                    </View>
                </ScrollScreenComponent>
            </BaseScreenComponent>
        );
    }
}





//TODO: get rid of this stuff
class BasicStuffComponent extends Component {
    render() {
        let image = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
                <Text>hello</Text>
                <Image source={image} style={{ width: 193, height: 110 }} />
                <DumbGreetingComponent name='William' />
                <DumbGreetingComponent name='hello' />
                <DumbGreetingComponent name='William' />
                <Blink text="this is blinking text" />
                <StyledComponent/>
                <FixedDimensionsComponent/>
            </View>
        )
    }
}

class DumbGreetingComponent extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class StyledComponent extends Component {
    render() {
        return (
        <View>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
            <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>
        );
    }
}

class FixedDimensionsComponent extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                <View style={fixedDimensionStyleSheet.steelBlueView}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    homeScreenComponentStyle: {
        flex: 1
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

const fixedDimensionStyleSheet = StyleSheet.create({
    steelBlueView: {
        width: 150, 
        height: 150, 
        backgroundColor: 'steelblue'
    },
});

const flexDimensionStyleSheet = StyleSheet.create({
    flexDimensionComponentStyle: {
        width: 150,
        height: 150, 
        
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: 'black',

        marginBottom: 15,

        //column is default it looks like
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
});