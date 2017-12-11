'use strict'
import {Image, Text, TouchableOpacity} from "react-native";
import React, {Component} from 'react';
export  class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress = {this.onPress.bind(this)}
                style={this.props.style}>
                <Image source={this.getSource()}
                style={{height:36,width:36}}/>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
    //= ()=>
    onPress (){
        this.setState(previousState=>{
            if( this.props.onPress){
                this.props.onPress(!previousState.checked);
            }
            return {checked:!previousState.checked}
        })
    }
    getSource() {
        if(this.state.checked){
            if (this.props.checkedSource) {
                return this.props.checkedSource
            } else {
                return require('../../image/icon_account.png')
            }
        }else{
            if (this.props.uncheckedSource) {
                return this.props.uncheckedSource
            } else {
                return require('../../image/icon_pwd.png')
            }
        }

    }
}