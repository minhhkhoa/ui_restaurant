import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'

function Back(props) {
    let { onPress, nameScreen } = props
    return (
        <View style={styles.container}>
            <Ionicons
                onPress={onPress}
                name="chevron-back-outline" size={30} color="white" style={{ padding: 10 }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{nameScreen}</Text>
            <Ionicons
                onPress={
                    () => {
                        alert("You pressed")
                    }}
                name="search-outline" size={30} color="white" style={{ padding: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 23
        // height:
    },
})

export default Back