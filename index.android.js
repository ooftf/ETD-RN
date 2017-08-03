/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text, TouchableOpacity, Button,
} from 'react-native';

import ShowScreen from "./src/components/ShowScreen"
import Main from "./src/components/Main"
import Logo from "./src/components/Logo";
import GuideScreen from "./src/components/GuideScreen";
import LoginScreen from "./src/components/LoginScreen";
import HomeScreen from "./src/components/HomeScreen";

const styles = StyleSheet.create({
    headerLeft: {
        height: 50,
        width: 50,
        padding: 10
    }
})
const AppNavigator = StackNavigator({
    Main: {screen: Main},
    Show: {screen: ShowScreen},
    Logo: {screen: Logo},
    GuideScreen: {screen: GuideScreen},
    LoginScreen: {screen: LoginScreen},
    HomeScreen:{screen:HomeScreen}
}, {
    initialRouteName: 'Logo',
    headerMode: 'screen',
    navigationOptions: ({navigation}) =>{return{headerLeft: (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack()
            }}>
            <Image
                resizeMode="center"
                style={styles.headerLeft}
                source={require("./src/image/left_arrow.png")}

            />
        </TouchableOpacity>
    ),
        headerStyle: {
            backgroundColor: '#2ea7e0',
        }}

    },

})

AppRegistry.registerComponent('Hello', () => AppNavigator);
