import React, {Component} from 'react';
import {View, Animated} from 'react-native';

import Timing from '../animation/timing';
import Spring from '../animation/spring';
import Decay from '../animation/decay';

export default class App extends Component {
  render() {
    return (
      <View>
        <Timing />
        <Spring />
        <Timing />
        <Decay />
        <Timing />
      </View>
    );
  }
}