import React, {Component} from 'react';
import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    ViewPagerAndroid
} from 'react-native';
import ToastNative from './android_native/ToastNative'
export default class GuideScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ViewPagerAndroid
                style={styles.fillView}
                initialPage={0}>
                <View style={styles.fillView}>
                    <Image style={styles.fillView} source={require("../image/guide_first.png")}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                            <Image
                                style={styles.skip}
                                source={require("../image/guide_skip.png")}/>
                        </TouchableOpacity>
                    </Image>
                </View>
                <View style={styles.fillView}>
                    <Image style={styles.fillView} source={require("../image/guide_second.png")}>
                        <TouchableOpacity
                            onPress={()=>{
                                ToastNative.show('Awesome', ToastNative.SHORT)
                                //this.props.navigation.navigate("HomeScreen")
                            }}>
                            <Image
                                style={styles.skip}
                                source={require("../image/guide_skip.png")}/>
                        </TouchableOpacity>
                    </Image>
                </View>
                <View style={styles.fillView}>
                    <Image style={styles.third} source={require("../image/guide_third.png")}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("LoginScreen")}>
                            <Image
                                style={styles.button}
                                source={require("../image/guide_home.png")}/>
                        </TouchableOpacity>
                    </Image>
                </View>
            </ViewPagerAndroid>
        )
    }
}
var styles = {
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
    fillView: {
        width: '100%',
        height: '100%'
    },
    skip: {
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 20,
        width: 77,
        height: 34
    },
    third:{
        justifyContent:"flex-end",
        width: '100%',
        height: '100%'
    },
    button:{
        marginBottom:20,
        alignSelf: "center",
        width: 194,
        height: 45
    }
}