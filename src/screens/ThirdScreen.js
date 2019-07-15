import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default class ThirdScreen extends Component {

  static navigationOptions =  {
    title: '디바이스',
    headerStyle: {
      backgroundColor: '#507CFF',
      height: 30,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25,
      position: 'absolute',
      left: 95,
      top: 0,
    },
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Third!</Text>
      </View>
    );
  }
}
