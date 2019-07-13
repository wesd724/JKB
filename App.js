import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Click from "./click";
import BasicBtn from "./button";
import Img from "./image";

export default class JKB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.lo1}/>
        <Click
         buttonColor='blue'
         onPress ={() => { alert('안녕');}}
         title = '버튼'
         />
         <Click />
         <Click />
         <Click />
        <Text style={styles.text1}>정규범</Text>
        <Text style={styles.text2}>20살입니다</Text>
        <View style={styles.lo2}/>
        <Img />
         <BasicBtn />
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
    left: 210,
    top: 25,
  },
});
