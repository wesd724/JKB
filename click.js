import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Click extends Component {
    static defaultProps = {
        buttonColor: 'black',
        onPress: () => null,
        titleColor: '#fff',
        title: '이름 없음',
    }

    constructor(props) {
        super(props);
    }

    render () {
        return (
        <TouchableOpacity style={[
                styles.button,
                {backgroundColor: this.props.buttonColor}]}
                onPress={this.props.onPress}>
            <Text style={[
                {color: this.props.titleColor}
                ]}>{this.props.title}</Text>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create ({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 1,
        borderRadius: 5,
      },
});