import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Click from "./src/button/click";
import BasicBtn from "./src/button/button";
import Img from "./src/image/image";
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';


class JKB extends Component {
  static navigationOptions = { header: null };

    render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.lo1}/>
        <Click
         buttonColor='blue'
         onPress ={() => { alert('안녕');}}
         title = '버튼!'
         />
         <Click
         title='First'
         onPress={() => this.props.navigation.navigate('F')} />
         <Click
         title='Second'
         onPress={() => this.props.navigation.navigate('S')} />
         <Click
         title='Third'
         onPress={() => this.props.navigation.navigate('T')} />
        <Text style={styles.text1}>정규범</Text>
        <Text style={styles.text2}>20살입니다</Text>
        <View style={styles.lo2}/>
        <Img />
         <BasicBtn />
      </View>
    );
  }  
}

const TabNavigator = createStackNavigator({
  Home: JKB, 
  F: FirstScreen ,
  S: SecondScreen,
  T: ThirdScreen,
});

export default createAppContainer(TabNavigator);


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
