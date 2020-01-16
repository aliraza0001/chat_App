import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const receivedMsg = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={styles.userImageBox}>
                    <Image source={require('../../assets/img.jpg')} style={styles.userImg} />
                </View>
                <View style={styles.messageBox}>
                    <Text style={styles.textMsg}>{props.receivedMsg ? props.receivedMsg : "hey, i'm good, wbu? "}</Text>
                </View>
                <View style={styles.msgTime}>
                    <Text style={styles.time}>12:00 AM</Text>
                </View>
            </View>
        </View>
    )
}

export default receivedMsg



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        flexDirection: "row"
    },
    messageContainer: {
        flex: 1,
        position: "relative",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    userImageBox: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    userImg: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2
    },
    messageBox: {
        width: "auto",
        maxWidth: 250,
        justifyContent: "center",
        backgroundColor: "#ff7ab1",
        padding: 10,
        borderRadius: 10
    },
    textMsg: {
        color: "#fff",
        fontSize: 14
    },
    msgTime: {
        position: "absolute",
        bottom: -15,
        left: 50
    },
    time: {
        color: "#ff7ab1",
        fontSize: 10
    }
})