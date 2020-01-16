import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/header/index'

export class userChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
        header:(<Header img={navigation.state.params.img} name={navigation.state.params.name} navigation={navigation} />)
        }
        
      };
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default userChatScreen
