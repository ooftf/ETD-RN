import React, {Component} from 'react';
import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    StyleSheet,
    ViewPagerAndroid
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
            tabBarIcon: (
                ({tintColor}) => {
                    <Image
                        source={require('../image/icon_account.png')}
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}
                    />
                }
            ),
        }
    },
    ProjectTab: {screen: ProjectTab},
    AccountTab: {screen: AccountTab},
    MoreTab: {screen: MoreTab},
}, {
    tabBarPosition: 'bottom',
})
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
        }
    }

    getHomeSource() {
        if (this.state.selectedIndex === 0) {
            return require('../image/bottom_home_selected.png')
        } else {
            return require('../image/bottom_home_unselected.png')
        }
    }

    getProjectsSource() {
        if (this.state.selectedIndex === 1) {
            return require('../image/bottom_projects_selected.png')
        } else {
            return require('../image/bottom_projects_unselected.png')
        }
    }

    getAccountSource() {
        if (this.state.selectedIndex === 2) {
            return require('../image/bottom_account_selected.png')
        } else {
            return require('../image/bottom_account_unselected.png')
        }
    }

    getMoreSource() {
        if (this.state.selectedIndex === 3) {
            return require('../image/bottom_more_selected.png')
        } else {
            return require('../image/bottom_more_unselected.png')
        }
    }

    homePress() {
        this.setState({
            selectedIndex: 0
        })
    };

    projectPress() {
        this.setState({
            selectedIndex: 1
        })
    };

    accountPress() {
        this.setState({
            selectedIndex: 2
        })
    };

    morePress() {
        this.setState({
            selectedIndex: 3
        })
    };

    getContentTab() {
        if (this.state.selectedIndex === 0) {
            return (<HomeTab style={styles.fragment}/>)
        } else if (this.state.selectedIndex === 1) {
            return (<ProjectTab style={styles.fragment}/>)
        } else if (this.state.selectedIndex === 2) {
            return (<AccountTab style={styles.fragment}/>)
        } else if (this.state.selectedIndex === 3) {
            return (<MoreTab style={styles.fragment}/>)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fragment}>
                    {this.getContentTab()}
                </View>
                <View style={styles.line}></View>
                <View style={styles.tabs}>
                    <TouchableOpacity
                        onPress={this.homePress.bind(this)}
                        style={styles.tab}>
                        <Image
                            resizeMode="center"
                            style={styles.tab}
                            source={this.getHomeSource()}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.projectPress.bind(this)}
                        style={styles.tab}>
                        <Image
                            resizeMode="center"
                            style={styles.tab}
                            source={this.getProjectsSource()}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.accountPress.bind(this)}
                        style={styles.tab}>
                        <Image
                            resizeMode="center"
                            style={styles.tab}
                            source={this.getAccountSource()}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.morePress.bind(this)}
                        style={styles.tab}>
                        <Image
                            resizeMode="center"
                            style={styles.tab}
                            source={this.getMoreSource()}/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    fragment: {
        width:'100%',
        height:'100%',
        flex: 1
    },
    tabs: {
        backgroundColor:'white',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        width: "100%",
        height: 50,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 40,
    },
    line: {
        height: 0.5, width: '100%', backgroundColor: '#E8E8E8'
    }
})