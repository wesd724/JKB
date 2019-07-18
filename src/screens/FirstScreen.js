import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button } from 'react-native';

import Drdn from '../dropdown/dropdown';


export default class FirstScreen extends Component {

  static navigationOptions =  {
    title: '드랍다운 페이지',
    // headerTitle: (
    //   <View style={{
    //     alignItems: 'center',
    //   flex: 1,}}>
    //     <Text style={{color: 'white'}}>
    //       device
    //     </Text>
    //   </View>
    // ),
    headerStyle: {
      backgroundColor: '#498045',
      height: 30,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25,
      position: 'absolute',
      left: 50,
      top: 0,
    },
    // headerLeft: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Home"
    //     color="blue"
    //   />
    // ),
    // headerRight: (
    //   <Button
    //   title='Second'
    //   onPress={() => alert('hello!')} />
    // ),
  };

  render() {
      return (
          <View style={styles.container}>
            <Drdn />
          </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAFED5',
  },
});
