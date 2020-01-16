import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const index = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>

                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#fff" />
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholder="User Nickname"
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
