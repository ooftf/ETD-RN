import React, {Component} from 'react';
import {
    Text,
} from 'react-native';
export default class OOF extends Component {
    constructor(props) {
        super(props);
        this.state = {colors: 5}
        setInterval(() => {
            this.setState(previousState => {
                return {
                    colors: previousState.colors + 0.1
                }
            })
        }, 1000)
    }

    render() {
        return (
            <Text style={{fontSize: this.state.colors, color: 'rgb(256,0,0)'}}
                  fontSize="100">Hello {this.props.name}! {this.state.colors}</Text>
        )
    }
}