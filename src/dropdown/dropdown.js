import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Drdn extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
    }
    
    render() {
      var data = [["C", "C++", "Java", "C#", "Python", "Javascript"], ["Rust", "Go", "Perl"], ["Assembly", "Fortran", "Lisp", "Cobol"]];
      return (
        <View style={{flex: 1}}>
          <View style={{height: 0}} />
          <DropdownMenu
            style={{flex: 1}}
            bgColor={'white'}
            tintColor={'#122AFF'}
            activityTintColor={'green'}   
            optionTextStyle={{color: '#FFF158'}}
            titleStyle={{color: '#FFF158'}} 
            maxHeight={300}
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}
          >
   
            <View style={styles.text}>
              <Text>
                {this.state.text} is the best language in the world
              </Text>
            </View>
   
          </DropdownMenu>
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create ({
      text: {
          flex: 1,
          position: 'absolute',
          left: 90,
          top: 100,
      },
  });