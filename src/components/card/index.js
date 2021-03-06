import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import dummyImage from '../../assets/doctor.png';


export default class index extends PureComponent {
    constructor(props) {
        super(props)

    }
    render() {
        const { name, img } = this.props
        let userImage = img ? img : dummyImage
        const { navigate } = this.props.navigation
        return (
            <View style={[Style.profileContainer, {  borderBottomWidth: 0.25, borderColor: "#666666"}]}>
                <TouchableOpacity onPress={() => navigate('UserChat', { name: name, img: img })} activeOpacity={0.7} style={Style.profileContainer}>
                    <View style={Style.imageContainer} >
                        <Image source={{ uri: userImage }} style={Style.img} />
                    </View>
                    <View style={Style.textContainer} >
                        <Text style={Style.text}>{name ? name : 'Test User'}</Text>
                        <Text style={Style.text}>{name ? name : 'Test User'}</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity style={Style.optionImageContainer} activeOpacity={0.7}>
                    <View style={Style.optionImageContainer}>
                        <Ionicons style={Style.optionImage} name="more-vert" size={20} color="#ff7ab1" />

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



const Style = StyleSheet.create({
    profileContainer: { height: 75, flexDirection: 'row', backgroundColor: "transparent",alignItems:"center" },
    imageContainer: { width: '25%', alignItems: "center", justifyContent: "center" },
    img: { width: 50, height: 50, borderRadius: 50 / 2 },
    textContainer: { width: '60%', justifyContent: "center" },
    text: { color: '#fff', fontWeight: 'bold', textAlign: "left" },
    optionImageContainer: { width: '15%', alignItems: "flex-end", justifyContent: "center" },
    optionImage: { width: 30, height: 30, borderRadius: 30 / 2, marginRight: 10 }
})






