import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native'
import { images } from '../constants'
import { Messengeritem } from '../components'

function Messenger(props) {
    let { name, url } = props.route.params.user;
    const [dataChat, setDataChat] = useState([
        {
            url: url,
            showUrl: true,
            isSender: true,
            messenger: 'Hello ',
            timestamp: 1722500483000,
        },
        {
            url: url,
            showUrl: false,
            isSender: true,
            messenger: 'Hi',
            timestamp: 1722500603000,
        },
        {
            url: url,
            showUrl: false,
            isSender: true,
            messenger: 'How about your work sdkdfskndjknsclsndnckn kjsdfkjnscdjnv',
            timestamp: 1722500843000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/23.jpg',
            showUrl: true,
            isSender: false,
            messenger: 'Ok',
            timestamp: 1722500844000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/23.jpg',
            showUrl: false,
            isSender: false,
            messenger: 'Gido',
            timestamp: 1722500854000,
        },
        {
            url: url,
            showUrl: true,
            isSender: true,
            messenger: 'Let go out',
            timestamp: 1722500964000,
        },
    ])
    let { goBack } = props.navigation
    // alert(JSON.stringify(chatHistory))
    return (
        <ImageBackground source={images.anh} style={{ flex: 1 }}>
            <View >
                <View style={styles.Header}>
                    <Ionicons
                        onPress={
                            () => {
                                goBack()
                            }}
                        name="chevron-back-outline" size={30} color="white" style={{ padding: 10 }}
                    />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        {name}
                    </Text>
                    <Ionicons
                        onPress={
                            () => {
                                alert("hhh")
                            }}
                        name="ellipsis-vertical-outline" size={30} color="white" style={{ padding: 10 }}
                    />
                </View>

                <FlatList
                    data={dataChat}
                    renderItem={({ item }) => <Messengeritem dataChat={item}
                    />}
                    keyExtractor={(item) => item.timestamp}
                    contentContainerStyle={{ paddingBottom: 130 }}
                />

            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        flexDirection: 'row',
        marginTop: 22,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2A1E16',
        marginBottom:15
    },
    Unread: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default Messenger