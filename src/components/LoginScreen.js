import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';
import ImageCode from "./widget/ImageCode";
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.column}>

                <View style={styles.row}>
                    <Image
                        resizeMode="center"
                        style={styles.image} source={require("../image/icon_account.png")}/>
                    <TextInput
                        placeholder='手机号码/用户/邮箱'
                        underlineColorAndroid='transparent'
                        style={styles.pwd}/>
                </View>
                <View style={{height: 0.5, width: '100%', backgroundColor: '#E8E8E8'}}/>
                <View style={styles.row}>
                    <Image
                        resizeMode="center"
                        style={styles.image} source={require("../image/icon_pwd.png")}/>
                    <TextInput
                        placeholder='请输入你的密码'
                        underlineColorAndroid='transparent'
                        style={styles.pwd}/>
                </View>
                <View style={{height: 0.5, width: '100%', backgroundColor: '#E8E8E8'}}/>
                <View style={styles.row}>
                    <Image
                        resizeMode="center"
                        style={styles.image} source={require("../image/icon_image_code.png")}/>
                    <TextInput
                        placeholder='请输入图形验证码'
                        underlineColorAndroid='transparent'
                        style={styles.pwd}/>
                    <ImageCode/>
                </View>
                <Button text="登录" onPress={() => {
                    this.props.navigation.navigate("Main")
                }}/>
            </View>
        )
    }
}

class Button extends Component {
    render() {
        const {text} = this.props;
        return (
            <TouchableOpacity
                height="50"
                onPress={this.props.onPress}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f0f0',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        backgroundColor: '#ffffff',
    },
    image: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        width: 20,
        height: 20,
    },
    pwd: {
        width: 50,
        height: 50,
        flex: 1,
    },
    button: {
        alignSelf: "stretch",
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2ea7e0',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    imageCode:{
        marginRight:15,
        width:100,
        height:45,
    }
});