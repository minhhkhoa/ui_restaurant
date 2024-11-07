import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { SettingItem } from '../components'
import { Switch } from 'react-native-elements';
import { Back } from '../components'

function Setting(props) {
    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <View style={styles.container}>
            <Back
                nameScreen={'Setting'}
                onPress={() => { goBack() }} />
            {/* <StatusBar backgroundColor='red'/> */}
            {/* Header */}
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.Body}>
                    {/* Common */}
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ height: 40, color: 'red', paddingStart: 10, backgroundColor: 'rgb(243, 239, 252)', paddingTop: 15 }}>
                            Common
                        </Text>
                        <View style={{ marginTop: 5 }}>
                            <SettingItem iconLeft={'globe-outline'} settingName={'Language'} placeholder={'English'} iconRight={'chevron-forward-outline'} />
                            <SettingItem iconLeft={'cloud-outline'} settingName={'Environment'} placeholder={'Production'} iconRight={'chevron-forward-outline'} />
                        </View>
                    </View>
                </View>

                {/* Account */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ height: 40, color: 'red', paddingStart: 10, backgroundColor: 'rgb(243, 239, 252)', paddingTop: 15 }}>
                        Account
                    </Text>
                    <View style={{ marginTop: 5 }}>
                        <SettingItem iconLeft={'call-outline'} settingName={'Phone number'} placeholder={''} iconRight={'chevron-forward-outline'} />
                        <SettingItem iconLeft={'mail-outline'} settingName={'Email'} placeholder={''} iconRight={'chevron-forward-outline'} />
                        <SettingItem iconLeft={'log-out-outline'} settingName={'Sign out'} placeholder={''} iconRight={'chevron-forward-outline'} />
                    </View>
                </View>
                {/* Secutiry */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ height: 40, color: 'red', paddingStart: 10, backgroundColor: 'rgb(243, 239, 252)', paddingTop: 15 }}>
                        Secutiry
                    </Text>
                    <View style={{ marginTop: 5 }}>
                        <SettingItem iconLeft={'phone-portrait-outline'} settingName={'Look app in background'} placeholder={''} iconRight={''} />
                        <SettingItem iconLeft={'finger-print-outline'} settingName={'Use fingerprint'} placeholder={''} iconRight={''} />
                        <SettingItem iconLeft={'lock-closed-outline'} settingName={'Change password'} placeholder={''} iconRight={''} />
                    </View>
                </View>
                {/* Misc */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ height: 40, color: 'red', paddingStart: 10, backgroundColor: 'rgb(243, 239, 252)', paddingTop: 15 }}>
                        Misc
                    </Text>
                    <View style={{ marginTop: 5 }}>
                        <SettingItem iconLeft={'document-text-outline'} settingName={'Terms of Service'} placeholder={''} iconRight={'chevron-forward-outline'} />
                        <SettingItem iconLeft={'file-tray-stacked-outline'} settingName={'Open source liceneses'} placeholder={''} iconRight={'chevron-forward-outline'} />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        height: 50,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Body: {

    },
})

export default Setting