import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput, SafeAreaView
} from 'react-native'


function ChatItem(props) {
    let { url, name, message, numberUnread } = props.chatHistory;
    let { Press } = props
    return (
        <TouchableOpacity onPress={Press}>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor: '#FFFFFF', height: 70, alignItems: 'center' }}>
                {numberUnread !== 0 ? <Text style={{
                    backgroundColor: 'red', textAlign: 'center',
                    borderRadius: 10, position: 'absolute', color: 'white', height: 20,
                    width: 20, top: 2, left: 40, zIndex: 1
                }}>
                    {numberUnread}
                </Text> : <View></View>}
                <Image source={{ uri: url }} style={{ height: 60, width: 60, borderRadius: 50, resizeMode: 'cover' }} />
                <View style={{ marginStart: 10 , flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:2}}>
                        <Text style={{ fontSize: 17, fontWeight: 600 }}>{name}</Text>
                        {numberUnread !== 0 ?
                            <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 500 }}>{message}</Text> :
                            <Text style={{ fontSize: 15, }}>{message}</Text>}
                    </View>
                    <View style={{flex:1.2,justifyContent:'center' }}>
                        {numberUnread !== 0 ?
                            <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 500,}}>●4p ago</Text> :
                            <Text style={{ fontSize: 15, }}></Text>}
                    </View>
                </View>
            </View>
        </TouchableOpacity>


    )
}

export default ChatItem