import React from 'react';
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
      </View>
    );
  }
}

class DumbGreetingComponent extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
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
