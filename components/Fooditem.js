import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSizes } from '../constants'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, Linking
} from 'react-native'

function Fooditem(props) {
    let { name, url, status, price, website, socialNetworks, } = props.food
    const { Press } = props
    const getColorfromStatus = (status) => {
        if (status.toUpperCase().trim() === "OPEN NOW") {
            return colors.success
        }
        else if (status.toUpperCase().trim() === "CLOSING SOON") {
            return colors.alert
        }
        else if (status.toUpperCase().trim() === "COMMING SOON") {
            return colors.warning
        }
        return colors.success
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.viewFoodImage}>
                    <Image style={styles.img} source={{
                        uri: url
                    }} />
                </View>
                <TouchableOpacity onPress={Press}>

                    <View style={styles.Allinfo}>
                        <Text style={styles.textFood}>
                            {name}
                        </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: colors.disable }}>
                                Status:
                            </Text>
                            <Text style={{ color: getColorfromStatus(status) }}>
                                {status.toUpperCase()}
                            </Text>
                        </View>
                        <Text style={{ color: colors.disable }}>
                            Prices: {price}$
                        </Text>
                        <Text style={{ color: colors.disable }}>
                            Food Type: Pizza
                        </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(website)}>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                                Website: {website}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            {(socialNetworks.facebook != undefined) &&
                                <TouchableOpacity onPress={() => Linking.openURL(socialNetworks['facebook'])}>
                                    <Ionicons name='logo-facebook'
                                        size={25} color={colors.disable} style={{ marginRight: 10 }}
                                    />
                                </TouchableOpacity>
                            }
                            {(socialNetworks.twitter != undefined) &&
                                <TouchableOpacity onPress={() => Linking.openURL(socialNetworks['twitter'])}>
                                    <Ionicons name='logo-twitter'
                                        size={25} color={colors.disable} style={{ marginRight: 10 }}
                                    />
                                </TouchableOpacity>}
                            {(socialNetworks.instagram != undefined) &&
                                <TouchableOpacity onPress={() => Linking.openURL(socialNetworks['instagram'])}>
                                    <Ionicons name='logo-instagram'
                                        size={25} color={colors.disable} style={{ marginRight: 10 }}
                                    />
                                </TouchableOpacity>}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        height: 130,
        marginTop: 25,
        flexDirection: 'row'
    },

    viewFoodImage: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 5
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    Allinfo: {
        flex: 1,
        marginStart: 10,
        marginRight: 10,
        // marginTop: 5
    },
    textFood: {
        fontSize: fontSizes.h3,
        fontWeight: 'bold'
    }
})

export default Fooditem
