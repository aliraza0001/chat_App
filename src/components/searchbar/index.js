import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '../Icon/Icon'

const index = (props) => {
    const Icon = <Ionicons style={props.IconStyle ? props.IconStyle : styles.searchIcon} icon={props.icon ? props.icon : "ios-search"} size={20} color="#fff" />
    const TouchableIcon = props.Touchable ? <TouchableOpacity onPress={props.onPress?props.onPress:null} activeOpacity={0.5}>{Icon}</TouchableOpacity>:Icon
    
    return (
        <View style={props.container ? props.container : styles.container}>
            <View style={props.searchSection ? props.searchSection : styles.searchSection}>

                {TouchableIcon}
                <TextInput
                    {...props}
                    style={props.input ? props.input : styles.input}
                    underlineColorAndroid="transparent"
                    autoCapitalize='sentences'
                />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginVertical: 10
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: "80%",
        borderRadius: 25,
        height: 40,

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        width: '80%',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#fff',
    }

})
