/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import App from './App';
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
const styles = StyleSheet.create({
    headerLeft: {
        height: 50,
        width: 50,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('Hello', () => AppNavigator);
