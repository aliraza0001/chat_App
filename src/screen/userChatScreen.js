import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/header/index'
import ReceivedMsg from '../components/message/receivedMsg' 
import SentMsg from '../components/message/sentMsg' 

export class userChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header img={navigation.state.params.img} name={navigation.state.params.name} navigation={navigation} />)
        }

    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
                
<SentMsg/>
<ReceivedMsg/>
                
            </View>
        )
    }
}

export default userChatScreen
