import React, {Component} from 'react';
import {
    Button
} from 'react-native';
export default class ShowScreen extends Component {
    static navigationOptions = {
        title: 'ShowScreen',
    };

    render() {
        const navigate = this.props.navigation.navigate
        return (
            <Button title="跳转到另一个页面"
                    onPress={
                        () => navigate('Main', {name: 'jane'})
                    }
            />
        )
    }
}