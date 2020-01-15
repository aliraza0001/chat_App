import React, { Component } from 'react'
import { Text, View } from 'react-native'
import User from '../components/profile/index'
import SearchBar from '../components/searchbar/index'

export default class UserScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#23152e", flex: 1 }}>
                <User />
                <SearchBar />
            </View>
        )
    }
}
