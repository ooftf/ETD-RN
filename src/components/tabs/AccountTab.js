import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    TextInput,
    ViewPagerAndroid
} from 'react-native';
import Log from '../native/Log'
import React, {Component} from 'react';
export default class AccountTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }
    render(){
        return(<View style={{alignItems:'center'}}>
            <TextInput
                placeholder='请输入你的密码'
                underlineColorAndroid='transparent'
                onChangeText={(text)=>this.setState({text})}
                style={styles.textInput}/>
            <Button
                style={styles.button}
                title="show log"
                onPress={()=>Log.e(this.state.text)}
            />
        </View>)
    }

}
var styles = {
    textInput:{
        width:'80%',
        height:50,
    },
    button:{
        width:300,
        height:50,
    }
}