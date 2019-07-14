import React, {Component} from 'react';
import { StyleSheet , Text, View, Button} from 'react-native';

export default class BasicBtn extends Component{
  onPressButton1 = () => {
    alert("ㅎㅇ");
    }
    render() {
        return(
          <Button
          onPress={this.onPressButton1}
          title="더보기.."
          color="green"
          />
        );
    }  
}