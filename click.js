import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class Click extends Component {  
   onPressLearnMore = () => {
    alert("ㅎㅇ");
  }
    render () {
        return (
            <View style={styles.click}>
                <Button style={styles.button}
                onPress={this.onPressLearnMore}
                title="Learn More"
                color="green"
                />
                 <Button style={styles.button}
                onPress={this.onPressLearnMore}
                title="Learn More2"
                color="blue"
                />
                 <Button style={styles.button}
                onPress={this.onPressLearnMore}
                title="Learn More3"
                color="red"
                />
          </View>
        );
    }
}

const styles = StyleSheet.create ({
    click: {
        backgroundColor: 'black',
    },
    button: {
        alignItems: 'center',
    },
});