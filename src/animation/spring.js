import React, {Component} from 'react';
import {View, Animated} from 'react-native';


export default class Spring extends Component {
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
        Animated.spring (
            this.state.position, {
            toValue : {x:100, y:0},
            friction : 0.0001,
            tension : 50,
        }).start();
    }

    _getStyle(){
        return {
            width: 100, height: 100,
            backgroundColor: 'yellow',
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