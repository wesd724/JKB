import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Img extends Component {
    render() {
        return (
        <Image style={styles.image}
          style={styles.image}
          source={require('../../images/1.png')}/>
        );
    }
}


const styles = StyleSheet.create ({
    image: {
      alignItems: 'center',
      position: 'absolute',
      left: 63,
      bottom: 50,
      height: '50%',
      width: '70%',
    },
});