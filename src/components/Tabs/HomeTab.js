'use strict'
import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    StyleSheet,
    ViewPagerAndroid,
    Dimensions,
} from 'react-native';
import React, {Component} from 'react';
var ViewPager = require('react-native-viewpager');

var deviceWidth = Dimensions.get('window').width;

import Swiper from 'react-native-swiper'
import constant from "../engine/constant";

export default class HomeTab extends Component {
    constructor() {
        super();
        this.state = {
            scrollEnabled: true,
            body: null,
            page: 0,
            dataSource: null
        }

    }

    onPageSelected(e) {
        console.log("onPageSelected::" + e.nativeEvent.position)
        this.setState({page: e.nativeEvent.position});
    }
    getHomeData() {
        return fetch(constant.baseUrl+'more/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'useClientVersion=1&terminalType=2',
        }).then(
            (response) => {
                return response.json()
            }
        ).catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1.picUrl !== p2.picUrl,

        });
        this.getHomeData().then((responseJson) => {
            console.log("then::responseJson" + JSON.stringify(responseJson))
            this.setState({
                body: responseJson.body,
                dataSource: dataSource.cloneWithPages(responseJson.body.picList),
            })
        })
    }
    render() {
        var {body} = this.state
        if (body === null) {
            return (<Text>加载中。。。</Text>)
        }
        var pages = [];
        let length = body.picList.length;
        for (var i = 0; i < length; i++) {
            pages.push(
                <View key={i} style={styles.page}>
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={{uri: body.picList[i].picUrl}}
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                    <Swiper style={styles.swiper} horizontal={true}  autoplay ={true} height={200}
                    dot={<View style={{backgroundColor:'#FFFFFF', width: 6, height: 6,borderRadius: 3, marginLeft: 5, marginRight: 5, marginTop: 3,}} />}
                            activeDot={<View style={{backgroundColor: '#FFFFFF', width: 9, height: 9, borderRadius: 4.5, marginLeft: 5, marginRight: 5, marginTop: 3,}} />}>
                        {pages}
                    </Swiper>
                <Text>Footer..</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceWidth,
        height: 200,
    },
    page: {
        width: deviceWidth,
        height: 200,
    },
    viewPager: {
        height: 200,
        width: deviceWidth,
    },
    swiper: {
        height: 200,
        width: deviceWidth,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});