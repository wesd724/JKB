import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';

export default class SecondScreen extends Component {

  static navigationOptions =  {
    title: '스크롤 페이지',
    headerStyle: {
      backgroundColor: '#D1FF47',
      height: 30,
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 25,
      position: 'absolute',
      left: 63,
      top: 0,
    },
  };
  render() {
    return (
      <ScrollView style={styles.sye}>
        <Text style={{fontSize:100}}>이것이 스크롤이다</Text>
        <Text style={{fontSize:100}}>신기하다</Text>
        <Text style={{fontSize:100}}>쭉쭉 내려간다</Text>
        <Text style={{fontSize:100}}>리액트 네이티브와</Text>
        <Text style={{fontSize:100}}>expo의 합작품은</Text>
        <Text style={{fontSize:100}}>초등학생들도, 더 어린 사람들도 쉽게 할 수 있는</Text>
        <Text style={{fontSize:100}}>엄청난 어플 개발 도구이다</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  sye: {
    flex: 1,
    backgroundColor: '#FFF4C1',
  },
});

