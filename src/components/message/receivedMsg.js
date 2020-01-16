import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const receivedMsg = () => {
    return (
        <View style={{ width: "100%", height: "auto", marginTop: 20, flexDirection: "row" }}>
            <View style={{ flex: 1, position: "relative", flexDirection: "row", justifyContent: "flex-start" }}>
                <View style={{ height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../assets/img.jpg')} style={{ height: 35, width: 35, borderRadius: 40 / 2 }} />
                </View>
                <View style={{ flex: 0.75, justifyContent: "center", backgroundColor: "#ff7ab1", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "#fff", fontSize: 14 }}>lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  </Text>
                </View>
                <View style={{ position: "absolute", bottom: -15, left: 50 }}>
                    <Text style={{ color: "#ff7ab1", fontSize: 10 }}>12:00 AM</Text>
                </View>
            </View>
        </View>
    )
}

export default receivedMsg