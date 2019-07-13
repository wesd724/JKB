import React, {Component} from 'react';
import { StyleSheet , Text, View, Button} from 'react-native';

export default class button extends Component{
    render() {
        return(
          <Button
          style={{alignTop: 10}}
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="black"
          />
        );
    }  
}