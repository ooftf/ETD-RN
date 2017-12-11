import {Button, TextInput, View} from 'react-native';
import Log from '../native/Log'
import React, {Component} from 'react';
import {CheckBox} from "../widget/CheckBox";

export default class AccountTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (<View style={{alignItems: 'center'}}>
            <TextInput
                placeholder='请输入你的密码'
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({text: text})}
                style={styles.textInput}/>
            <Button
                style={styles.button}
                title="show log"
                onPress={() => Log.e(this.state.text.toString())}/>
            <CheckBox
                style={styles.CheckBox}
                checkedSource={require('../../image/icon_checked.png')}
                uncheckedSource={require('../../image/icon_unchecked.png')}
                onPress={(checked) => {
                    this.setState({text: checked})
                }}
                text={'成功了'}/>
            <Button
                style={styles.button}
                title="show log"
                onPress={() => Log.e(this.state.text.toString())}/>
        </View>)
    }
}
var styles = {
    textInput: {
        width: '80%',
        height: 50,
    },
    button: {
        width: 300,
        height: 50,
    },
    CheckBox:{
        width: 100,
        height: 30,
        flexDirection: 'row',
        justifyContent:'center',
        alignContent:'center',
    }
}
