import React, {Component} from 'react';
import { StyleSheet , Text, View, Button} from 'react-native';

export default class BasicBtn extends Component{
    static defaultProps = {
      color: 'black',
      onPress: () => null,
      title: '이름 없음',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <Button
            onPress={this.props.onPress}
            title={this.props.title}
            color={this.props.color}
          />
        );
    }  
}