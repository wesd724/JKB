import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Timing from '../animation/timing';
import Spring from '../animation/spring';
import Decay from '../animation/decay';

export default class App extends Component {

  static navigationOptions =  {
    title: '애니메이션 페이지',
    headerStyle: {
      backgroundColor: '#0863EB',
      height: 30,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25,
      position: 'absolute',
      left: 42,
      top: 0,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Timing />
        <Spring />
        <Timing />
        <Decay />
        <Timing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84CFE8',
  },
});