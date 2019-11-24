import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const WEBVIEW_REF = 'webview';

export default class YoutubeScreen extends Component {

    static navigationOptions =  {
        title: '유튜브 페이지',
        headerStyle: {
          backgroundColor: '#FFE9D9',
          height: 30,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontSize: 25,
          position: 'absolute',
          left: 60,
          top: 0,
        },
    };
  render() {
      let webViewRef;
        return (
          <View style={styles.container}>
            <WebView
              ref={WEBVIEW_REF}
              source={{uri: 'https://www.youtube.com/embed/q7PFPFG6nTM?controls=1&disablekb=1&rel=0'}}
              style={{flex: 1}}
              startInLoadingState={true}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}} onPress={() => {this.refs[WEBVIEW_REF].reload();}}>Reload</Text>
            </TouchableOpacity>
          </View>
      );
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
    backgroundColor: '#FF0000',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 3
  }
});