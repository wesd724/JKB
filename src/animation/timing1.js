import React, {Component} from 'react';
import {View, Animated} from 'react-native';


export default class Timing1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            positions: [
                new Animated.ValueXY({x:312, y:0}),
            ]
          };
        }

    componentDidMount(){
        Animated.sequence(
            this.state.positions.map(position => this._moveX(position))
        ).start();
    }

    _moveX(position){
        return Animated.timing (
            position, {
                toValue : {x:0, y:0},
                duration : 1000,
                delay : 300,
            }
        );
    }

    _getStyle(position){
        return {
            width: 100, height: 100,
            backgroundColor: '#008033',
            transform:[
                {translateX:position.x},
            ]
        }
    }


    render() {
        return (
          <View>
            {
              this.state.positions.map((position, index) => {
                return (
                  <Animated.View style={this._getStyle(position)} key={index}/>
                )
              })
            }
          </View>
        );
    }
}