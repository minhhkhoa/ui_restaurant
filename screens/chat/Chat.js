import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import ChatItem from './ChatItem';

import { dataChat } from '../../data'


function Chat(props) {
    const [chatHistory, setChatHistory] = useState(dataChat)
    // alert(JSON.stringify(chatHistory))
    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <View>
            {/* <StatusBar backgroundColor='black'/> */}
            <View style={styles.Header}>
                <Ionicons
                    onPress={
                        () => {
                            alert("You pressed")
                        }}
                    name="chevron-back-outline" size={30} color="white" style={{ padding: 10 }}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                }}>
                    Notifications
                </Text>
                <Ionicons
                    onPress={
                        () => {
                            alert("You pressed")
                        }}
                    name="search-outline" size={30} color="white" style={{ padding: 10 }}
                />
            </View>

            <View style={styles.Unread}>
                <Text style={{ fontStyle: 'italic', paddingStart: 10 }}>
                    Unread Messages: {chatHistory.reduce((tong, item) => tong + item.numberUnread, 0)}
                </Text>
                <Ionicons name='trash-outline' size={18} color="red" style={{ padding: 10 }}
                    onPress={
                        () => {
                            alert("You pressed delete")
                        }}
                />
            </View>

            <FlatList
                data={chatHistory}
                renderItem={({ item }) => <ChatItem chatHistory={item}
                    Press={function () {
                        navigate('Messenger',{user:item})
                    }}
                />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingBottom: 130 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:10
    },
    Header: {
        flexDirection: 'row',
        marginTop: 22,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2A1E16'
    },
    Unread: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default Chat