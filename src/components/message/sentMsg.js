import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Img from '../../assets/img.jpg'

const SentMsg = (props) => {
    const img = props.img ? props.img : Img
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, position: "relative", flexDirection: "row", justifyContent: "flex-end" }}>
                <View style={{ width:"auto",maxWidth:250, justifyContent: "center", backgroundColor: "#23152e", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "#fff", fontSize: 14 }}>{props.sentMessage ? props.sentMessage : "hello hello hello hello hello hello hello hello hello hello "}</Text>
                </View>
                <View style={{ position: "absolute", bottom: -15, right: 50 }}>
                    <Text style={{ color: "#23152e", fontSize: 10 }}>12:00 AM</Text>
                </View>
                <View style={{ height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                    <Image source={img} style={{ height: 35, width: 35, borderRadius: 35 / 2 }} />
                </View>
            </View>
        </View>
    )
}

export default SentMsg


const styles = StyleSheet.create({
    container: { width: "100%", height: "auto", marginTop: 15, flexDirection: "row" },
})
