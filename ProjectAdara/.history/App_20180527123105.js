import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let image = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>hello</Text>
        <Image source={image} style={{width: 193, height: 110}}/>
        <DumbGreetingComponent name='William' />
        <DumbGreetingComponent name='William' />
        <DumbGreetingComponent name='William' />
        <DumbGreetingComponent name='William' />
        <DumbGreetingComponent name='hello' />
        <DumbGreetingComponent name='William' />
        <DumbGreetingComponent name='William' />
        <Blink text="this is blinking text" />
      </View>
    );
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
      this.state = {isShowingText: true};
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});