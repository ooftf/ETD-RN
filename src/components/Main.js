import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    Text,
    Button,
    View,
    BackHandler,
    ScrollView, TouchableOpacity
} from 'react-native';
import OOF from "./OOF"

export default class Main extends Component {
    constructor(props) {
        super();
        this.state = {text: "请输入"}
    }
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid );
    }


    componentUnWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    _onBackAndroid=()=>{
        BackHandler.exitApp()
        return true;
    }
    static navigationOptions = {
        title: 'Hello',
        headerBackTitle: null,
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft: <View>
            <TouchableOpacity
                onPress={() => {

                    }
                }
            />
        </View>,
        gesturesEnabled: true
    };

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <ScrollView>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Image style={styles.pic}
                       source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <Image style={styles.pic} source={pic}/>
                <OOF name={this.state.text}/>
                <TextInput
                    style={{width: 200}}
                    onChangeText={(text) => {
                        this.setState({text})
                    }}/>
                <Button
                    title="确定"
                    onPress={
                        () => this.props.navigation.navigate('Show', {name: 'jane'})
                    }
                />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        flex: 1,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    pic: {
        flex: 1,
        width: 193,
        height: 110,

    }
});