import {
    Button, FlatList,
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import LoginScreen from "../LoginScreen";
import constant from "../engine/constant";

export default class InvestTab extends Component {
    constructor() {
        super();
        this.state = {
            projectList: null,
            isRefreshing: false,
            page: 1,
            hasMore: false,
            isLoadingMore:false,
        }
    }

    geformData() {
        let formData = new FormData();
        formData.append("pageSize", "10");
        formData.append("page", "1");
        formData.append("sort", "asc");
        formData.append("userType", "0");
        console.log(JSON.stringify(formData))
        return formData;
        //'pageSize=10&page=1&sort=asc&userType=0'
    }

    _onRefresh() {
        console.log('_onRefresh');
        if(this.state.isLoadingMore||this.state.isRefreshing)return
        this.setState(() => {
            console.log('setState' + this.state.page);
            return {
                isRefreshing: true,
                page: 1,
            }

        },()=>{
            console.log('after SetState' + this.state.page);
            this.requestInvestData().then((responseJson) => {
                console.log("responseJson" + responseJson.body.list.length)
                this.setState((previousState) => {
                    return {
                        projectList: responseJson.body.list,
                        isRefreshing: false,
                        page: (previousState.page + 1),
                        hasMore: (responseJson.body.totalRecordNum > responseJson.body.list.length),
                    }
                })
                console.log("this.state.projectList" + this.state.projectList)
            });
        })
    }

    _onLoadMore() {
        console.log('_onLoadMore');
        if(this.state.isLoadingMore||this.state.isRefreshing)return
        if (!this.state.hasMore) return
        this.setState(
            {isLoadingMore:true},()=>{
                this.requestInvestData().then((responseJson) => {
                    console.log("requestInvestData" + responseJson.body.list.length)
                    this.setState((previousState) => {
                        let newProjectList = previousState.projectList.concat(responseJson.body.list);
                        return {
                            projectList: newProjectList,
                            page: (previousState.page + 1),
                            hasMore: (responseJson.body.totalRecordNum > newProjectList.length),
                            isLoadingMore:false,
                        }

                    })
                    console.log("this.state.projectList" + this.state.projectList)
                });
            }
        )
    }

    requestInvestData() {
        console.log("fetch::" + this.state.page)
        return fetch(constant.baseUrl+'investments/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'pageSize=10&page=' + this.state.page + '&sort=asc&userType=0', //排序顺序 asc-顺序 desc-倒序  orderArgs:排序字段0-借款金额,1-按预期年化收益,2-借款期限,默认不填发布时间
        }).then((response) => {
                return response.json()
            }
        ).catch((error) => {
            console.error(error);
        });
    }

    componentWillMount() {
        this._onRefresh();
    }

    render() {
        return (
            this.state.projectList === null ? <Text> 加载中... </Text> :
                <View style={styles.fragment}>
                    <FlatList
                        style={styles.fragment}
                        keyExtractor={(item, index) => item.iteId}
                        data={this.state.projectList}
                        renderItem={({item}) => {
                            return <Item data={item} name="AA"/>
                        }}
                        refreshing={this.state.isRefreshing}
                        onEndReached={this._onLoadMore.bind(this)}
                        onRefresh={this._onRefresh.bind(this)}
                        onEndReachedThreshold={0.5}
                    />
                </View>)
    }


}

class Item extends Component {
    getSourceXinOrDi() {
        return (this.props.data.iteType === 1 ? require('../../image/di.png') : require('../../image/xin.png'))
    }

    getProgressWidth(data) {
        let progress = data.iteProgress * 100 - 6
        if (progress < 0) {
            progress = 0
        }
        ;
        if (progress > 85) {
            progress = 85
        }
        return progress + '%'
    }

    render() {
        console.log("...." + this.props.data)
        let data = this.props.data
        return (
            <View style={{height: 150, width: '100%', backgroundColor: 'white', margin: 5, alignItems: 'center',}}>
                <View style={{height: 30, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title}>{data.iteTitle}</Text>< Image
                    style={{height: 20, width: 20, paddingRight: 20}} source={this.getSourceXinOrDi()}/>
                </View>
                <View style={styles.line}/>
                <View style={{
                    height: 80,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: '80%',
                        width: '50%',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            height: '50%',
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={styles.returnRate}>{(data.iteYearRate * 100).toFixed(2)}</Text>
                            <Text style={{fontSize: 15, color: 'red', alignSelf: "flex-end", marginBottom: 5}}>%</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', height: '50%'}}><Text>
                            预期投资回报率</Text></View>
                    </View>
                    <View style={{height: '80%', width: 0.5, backgroundColor: '#E8E8E8'}}/>
                    <View style={{
                        height: '90%',
                        width: '50%',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{flexDirection: 'row', height: '50%', alignItems: 'center'}}><Text
                            style={{width: '40%'}}>期限</Text><Text
                            style={{width: '40%'}}>{data.iteRepayDate}{data.iteRepayIntervalName}</Text></View>
                        <View style={{flexDirection: 'row', height: '50%', alignItems: 'center'}}><Text
                            style={{width: '40%'}}>贷款金额</Text><Text
                            style={{width: '40%'}}>{data.iteLimitYuan}</Text></View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', height: 2, width: '90%'}}>
                    <View
                        style={{height: 2, width: (data.iteProgress * 100 + '%'), backgroundColor: '#2ea7e0'}}/><View/>
                    <View style={{height: 2, width: ((1 - data.iteProgress) * 100 + '%'), backgroundColor: '#DDDDDD'}}/><View/>
                </View>
                <View style={{flexDirection: 'row', height: 2, width: '90%'}}>
                    <Text style={{
                        marginLeft: (this.getProgressWidth(data)),
                        textAlign: "right",
                        alignSelf: 'flex-start'
                    }}>{(data.iteProgress * 100).toFixed(2)}%</Text>
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
        width: '100%',
        height: '100%',
        flex: 1
    },
    title: {
        fontSize: 12,
        paddingRight: 5,
        paddingLeft: 20,
    },
    returnRate: {
        fontSize: 30,
        color: 'red',
    },
    line: {
        height: 0.5, width: '100%', backgroundColor: '#E8E8E8'
    }
})