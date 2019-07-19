import React, {Component} from 'react';
import {View, Animated} from 'react-native';


export default class Decay extends Component {
    constructor(props){
        super(props);
        this.state = {
        // value: new Animated.Value(0),
        position: new Animated.ValueXY({x:0, y:0}),
        };
    }

    componentDidMount(){
        this._moveX();
    }

    _moveX(){
        Animated.decay (
            this.state.position, {
            toValue : {x:100, y:0},
            velocity : 0.63,
        }).start();
    }

    _getStyle(){
        return {
            width: 100, height: 100,
            backgroundColor: 'blue',
            transform:[
            {translateX:this.state.position.x},
            ]
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