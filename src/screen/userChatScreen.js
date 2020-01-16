import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/header/index'
import ReceivedMsg from '../components/message/receivedMsg'
import SentMsg from '../components/message/sentMsg'
import TextInput from '../components/searchbar/index'
import Ionicons from '../components/Icon/Icon'


export class userChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header img={navigation.state.params.img}
                name={navigation.state.params.name} navigation={navigation} />)
        }

    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
                <View style={{ flex: 1 }}>
                    <SentMsg />
                    <ReceivedMsg />
                </View>
                <View style={styles.TextInputContainer}>
                    <View>
                        <TextInput container={styles.container}
                            searchSection={styles.searchSection}
                            IconStyle={styles.searchIcon}
                            icon='ios-attach' input={styles.input}
                            placeholder="Type Your Message"
                            IconStyle={{paddingRight:20}}
                            Touchable
                            onPress={() => console.log('Yes I m Working')}

                        />
                    </View>
                    <TouchableOpacity style={{ height: 40, width: 30, justifyContent: "center" }} activeOpacity={0.6}>
                        <Ionicons icon='md-send' color='green' size={30} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default userChatScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginVertical: 10
    },
    searchSection: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(163,162,159,0.3)',
        width: "95%",
        borderRadius: 25,
        height: 40,

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        color: 'green',
    },
    TextInputContainer: {
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    }

})
