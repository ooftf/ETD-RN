import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    ViewPagerAndroid
} from 'react-native';
import {
    TabNavigator
} from 'react-navigation'
import React, {Component} from 'react';
import InvestTab from "./InvestTab";
import CreditTab from "./CreditTab";

const MyTab = TabNavigator(
    {
        Invest: {
            screen: InvestTab,
            navigationOptions: {
                tabBarLabel: '投资项目',
            },
        },
        Credit: {
            screen: CreditTab,
            navigationOptions: {
                tabBarLabel: '债权转让',
            },

        },
    }, {
        tabBarOptions: {
            style: {
                height: 48,
                backgroundColor:'white'
            },
            activeBackgroundColor: 'white',
            activeTintColor: 'black',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: 'black',
            indicatorStyle:{
                backgroundColor:'#2DA6DF'
            },
            labelStyle:{
                backgroundColor:'white'
            },
        }
    }
)


export default class ProjectTab extends Component {
    render() {
        return (
            <MyTab style={{flex: 1, width: '100%', height: '100%'}}/>
        )
    }
}