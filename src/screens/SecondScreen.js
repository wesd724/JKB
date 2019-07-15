import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';

export default class SecondScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.sye}>
        <Text style={{fontSize:100}}>이것이 스크롤이다</Text>
        <Text style={{fontSize:100}}>신기하다</Text>
        <Text style={{fontSize:100}}>쭉쭉 내려간다</Text>
        <Text style={{fontSize:100}}>리액트 네이티브와</Text>
        <Text style={{fontSize:100}}>expo의 합작품은</Text>
        <Text style={{fontSize:100}}>초등학생들도, 그 아래의 사람들도 할 수 있는</Text>
        <Text style={{fontSize:100}}>엄청난 어플 개발 도구야</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  sye: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
