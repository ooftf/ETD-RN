import {
    Button,
    Image,
    Text, TouchableOpacity,
    View,
    ViewPagerAndroid
} from 'react-native';
import Calendar from '../native/CalendarView'
import React, {Component} from 'react';
export default class MoreTab extends Component{
    render(){
        return(<View>
            <Calendar style={styles.calendar}/>
        </View>)
    }
}
var styles = {
    calendar:{
        width: '100%',
        height: '50%',
        backgroundColor:'white',
    }
}