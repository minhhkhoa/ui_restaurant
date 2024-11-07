import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { dataChat } from '../data';

function Messengeritem(props) {
    let { url, isSender, messenger, timestamp, showUrl } = props.dataChat
    return (
        <View>
            {isSender ?
                <View style={styles.left}>
                    {showUrl ?
                        <View style={{ width: 60 }}>
                            <Image style={styles.img} source={{ uri: url }} />
                        </View> :
                        <View style={{ width: 60,height:40}}></View>}
                    <View style={styles.boder}>
                        <Text style={styles.msg}>{messenger}</Text>
                    </View>
                </View> :
                <View style={styles.right}>
                    {showUrl ?
                        <View style={{ width: 60 }}>
                            <Image style={styles.img} source={{ uri: url }} />
                        </View> :
                        <View style={{ width: 60,marginVertical:5 ,backgroundColor:'red' }}></View>}
                    <View style={styles.boder}>
                        <Text style={styles.msg}>{messenger}</Text>
                    </View>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    left: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    right: {
        // backgroundColor: 'green',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 1,
        marginTop:10
    },
    msg: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: '500',
        paddingVertical: 5
    },
    img: {
        height: 55,
        width: 55,
        borderRadius: 50,
        resizeMode: 'cover',
        // marginVertical: 10,
    },
    boder: {
        backgroundColor: '#F0F5FE',
        marginHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // flex:3
    }
})

export default Messengeritem