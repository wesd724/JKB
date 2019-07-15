import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Demo from '../dropdown/dropdown';

export default class FirstScreen extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Demo />
          </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });