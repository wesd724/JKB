import React, {Component} from 'react';
import {View, Animated} from 'react-native';


export default class Timing extends Component {
    constructor(props){
        super(props);
        this.state = {
        value: new Animated.Value(0),
        position: new Animated.ValueXY({x:0, y:0}),
        };
    }

    componentDidMount(){
        this._fadeIn();
    }

    _fadeIn(){
        Animated.timing (
            this.state.value, {
            toValue : 1,
            duration : 1000,
            delay : 200
        }).start();
    }

    _getStyle(){
        return {
            width: 100, height: 100,
            backgroundColor: '#000',
            opacity: this.state.value,
        }
    }


    render() {
        return (
            <View>
              <Animated.View style={this._getStyle()} />
            </View>
        );
    }
}