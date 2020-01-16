import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Img from '../../assets/img.jpg'

const SentMsg = (props) => {
    const img = props.img ? props.img : Img
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={styles.messageBox}>
                    <Text style={styles.textMsg}>{props.sentMessage ? props.sentMessage : "hello hello hello hello hello hello hello hello hello hello "}</Text>
                </View>
                <View style={styles.msgTime}>
                    <Text style={styles.time}>12:00 AM</Text>
                </View>
                <View style={styles.userImgBox}>
                    <Image source={img} style={styles.userImg} />
                </View>
            </View>
        </View>
    )
}

export default SentMsg


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        marginTop: 15,
        flexDirection: "row"
    },
    messageContainer: {
        flex: 1,
        position: "relative",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    messageBox: {
        width: "auto",
        maxWidth: 250,
        justifyContent: "center",
        backgroundColor: "#23152e",
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
        right: 50
    },
    time: {
        color: "#23152e",
        fontSize: 10
    },
    userImgBox: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    userImg: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2
    }
})
