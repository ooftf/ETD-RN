import React,{Component}from "react"
import {
    Image,
    View,
}from 'react-native'
export default class Logo extends Component{
    constructor() {
        super();
        this.interval =setInterval(()=>{
            this.props.navigation.navigate("GuideScreen")
            clearInterval(this.interval)
        },2000)
    }
    static navigationOptions = {
        header:null
    };
    render(){
        return(
            <View style={{flex:1}}>
                <Image style={{width:"100%",height:"100%"}} source={require("../image/logo_bg.jpg")}/>
            </View>
        )
    }
}