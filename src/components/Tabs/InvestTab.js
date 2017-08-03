import {
    Button, FlatList,
    Image,
    Text, TouchableOpacity,
    View,
    ViewPagerAndroid
} from 'react-native';
import React, {Component} from 'react';
import ImageCode from "../widget/ImageCode";

export default class InvestTab extends Component {
    constructor(){
        super();
        this.state={
            projectList:null
        }

    }
    requestInvestData() {
        return fetch('https://api.etongdai.com/service/investments/list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: 'pageSize=10&page=1&sort=asc&orderArgs=0&userType=0'//排序顺序 asc-顺序 desc-倒序 排序字段0-借款金额,1-按预期年化收益,2-借款期限,默认不填发布时间
        }).then((response) => {
                return response.json()
            }
        ).catch((error) => {
            console.error(error);
        });
    }
    componentWillMount() {
        this.requestInvestData().then((responseJson)=>{
            console.log("requestInvestData"+responseJson.success)
            this.setState({
                projectList:responseJson.body.list
            })
        });
    }

    render() {
        return (<View>
            <Text>{this.state.projectList}</Text>
            <FlatList
                data={this.state.projectList}
                renderItem={({item}) => {
                    console.log("...."+item)
                    return <Item data={item}/>
                }}
            />
        </View>)
    }


}
class Item extends Component{
    render(){
        function getSourceXinOrDi(){
            return (this.props.data.iteType===1?require('../../image/di.png'):require('../../image/xin.png'))
        }
        console.log("...."+this.props.data)
        return(
            <View style={{height:120,width:'100%',backgroundColor:'white'}}>
                <View style={{height:20,width:'100%',flexDirection:'row'}}>
                    <Text>{this.props.data.iteTitle}</Text><Image source={getSourceXinOrDi()}/>
                </View>
                <View style={styles.line}/>
            </View>
        )
    }
}