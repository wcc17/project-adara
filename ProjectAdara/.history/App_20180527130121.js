import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FlexDimensionsBasicsComponent from './src/components/FlexDimensionsBasicsComponent'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <BasicStuffComponent/>
                <FlexDimensionsBasicsComponent style={flexDimensionStyleSheet.flexDimensionsComponent}/>
            </View>
        );
    }
}

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
                <DumbGreetingComponent name='William' />
                <DumbGreetingComponent name='William' />
                <DumbGreetingComponent name='William' />
                <DumbGreetingComponent name='hello' />
                <DumbGreetingComponent name='William' />
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    flexDimensionsComponent: {
        width: 150,
        height: 150, 
    },
});
