import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Timing1 from '../animation/timing1';
import Timing2 from '../animation/timing2';
import Timing3 from '../animation/timing3';
import Spring from '../animation/spring';
import Decay from '../animation/decay';
import Fade from '../animation/fade';

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
        <Fade />
        <Timing1 />
        <Spring />
        <Timing2 />
        <Decay />
        <Timing3 />
        <Fade />
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