import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const index = (props) => {
    return (

        <View style={Style.profileContainer}>
            <TouchableOpacity activeOpacity={0.7} style={Style.profileContainer}>
                <View style={Style.imageContainer} >
                    <Image source={require('../../assets/doctor.png')} style={Style.img} />
                </View>
                <View style={Style.textContainer} >
                    <Text style={Style.text}>{props.name ? props.name : 'Test User'}</Text>
                    <Text style={Style.text}>{props.name ? props.name : 'Test User'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={Style.optionImageContainer}>
                <View style={Style.optionImageContainer}>
                    <Ionicons style={Style.optionImage} name="ios-more" size={20} color="#ff7ab1" />

                </View>
            </TouchableOpacity>
        </View>

    )
}

export default index

const Style = StyleSheet.create({
    profileContainer: { height: 60, flexDirection: 'row', backgroundColor: "transparent",marginTop:10 },
    imageContainer: { width: '25%', alignItems: "center", justifyContent: "center" },
    img: { width: 50, height: 50, borderRadius: 50 / 2 },
    textContainer: { width: '60%', justifyContent: "center" },
    text: { color: '#fff', fontWeight: 'bold' },
    optionImageContainer: { width: '15%', alignItems: "flex-end", justifyContent: "center" },
    optionImage: { width: 30, height: 30, borderRadius: 30 / 2, marginRight: 10 }
})