import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const WEBVIEW_REF = 'webview';

export default class YoutubeScreen extends Component {

    static navigationOptions =  {
        title: '웹 사이트',
        headerStyle: {
          backgroundColor: '#46EBC5',
          height: 30,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontSize: 25,
          position: 'absolute',
          left: 86,
          top: 0,
        },
    };
  render() {
      let webViewRef;
        return (
          <View style={styles.container}>
            <WebView
              ref={WEBVIEW_REF}
              source={{uri: 'https://wesd724.github.io'}}
              style={{flex: 1}}
              startInLoadingState={true}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#000'}} onPress={() => {this.refs[WEBVIEW_REF].goBack()}}>Back</Text>
            </TouchableOpacity>
          </View>
      );
  }

  Forward() {
        this.refs[WEBVIEW_REF].goForward();
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#4E98FF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 3,
  },
});