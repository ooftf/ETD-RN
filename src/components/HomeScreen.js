import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';
import HomeTab from "./Tabs/HomeTab";
import ProjectTab from "./Tabs/ProjectTab";
import AccountTab from "./Tabs/AccountTab";
import MoreTab from "./Tabs/MoreTab";

const MyTab = TabNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                focused
                    ?
                    <Image
                        source={require('../image/bottom_home_selected.png')}
                        style={styles.tabBarIcon}
                    />
                    :
                    <Image
                        source={require('../image/bottom_home_unselected.png')}
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}
                    />
            ),
        }
    },
    ProjectTab: {
        screen: ProjectTab,
        navigationOptions: {
            tabBarLabel: '项目列表',
            tabBarIcon: ({tintColor, focused}) => (
                focused ?
                    <Image
                        source={require('../image/bottom_projects_selected.png')}
                        style={styles.tabBarIcon}
                    />
                    :
                    <Image
                        source={require('../image/bottom_projects_unselected.png')}
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}
                    />
            ),
        }
    },
    AccountTab: {
        screen: AccountTab,
        navigationOptions: {
            tabBarLabel: '个人中心',
            tabBarIcon: ({tintColor, focused}) => (
                focused
                    ?
                    <Image
                        source={require('../image/bottom_account_selected.png')}
                        style={styles.tabBarIcon}
                    />
                    :
                    <Image
                        source={require('../image/bottom_account_unselected.png')}
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}
                    />
            ),
        }
    },
    MoreTab: {
        screen: MoreTab, navigationOptions: {
            tabBarLabel: '更多',
            tabBarIcon: ({tintColor, focused}) => (
                focused
                    ?
                    <Image
                        source={require('../image/bottom_more_selected.png')}
                        style={styles.tabBarIcon}
                    />
                    :
                    <Image
                        source={require('../image/bottom_more_unselected.png')}
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}
                    />
            ),
        }
    },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            height: 49,
        },
        tabStyle: {
            width: 100,
            height: 49,
        },
        iconStyle: {
            width: 36,
            height: 36,
        },
        indicatorStyle: {
            width: 0,
            height: 0,
        },
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        activeTintColor: '#4ECBFC',
        inactiveTintColor: '#444444',
        showIcon: true,
        showLabel: false,
    }
})
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <MyTab/>
        )
    }
}


const styles = StyleSheet.create({
    tabBarIcon: {
        width: 36,
        height: 36,
    },
})