import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Click from "./click";

export default class JKB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Click />
        <View style={styles.lo1}/>
        <Text style={styles.text1}>hello</Text>
        <Text style={styles.text2}>World</Text>
        <View style={styles.lo2}/>
      </View>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  lo1: {
    flex: 1,
    backgroundColor: '#FFC45E',
  },
  lo2: {
    flex: 8,
    backgroundColor: 'skyblue',
  },
  text1: {
    position: "absolute",
    left: 163,
    top: 25,
  },
  text2: {
    position: "absolute",
    left: 200,
    top: 25,
  },
});
