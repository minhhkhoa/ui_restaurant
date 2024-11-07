import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native'
import { images, icons, fontSizes } from '../constants'
import { UIbutton } from '../components'


function Welcome(props) {
    const [accountType, setAccountType] = useState([
        {
            name: 'Influencer',
            isChecked: false
        },
        {
            name: 'Business',
            isChecked: true
        },
        {
            name: 'Individual',
            isChecked: false
        },
    ])

    const press = (acc) => setAccountType(accountType.map((x) => ({
        ...x, isChecked: acc.name === x.name
    })))

    //navigation
    const { navigation, route } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.BgrImage} source={images.background}>
                {/* Header */}
                <View style={styles.head}>
                    <Image source={icons.iconFire}
                        style={{ height: 30, width: 30 }}
                    />
                    <Text style={{ fontSize: 20, marginTop: 10, color: 'white' }}>YOURCOPANY.CO</Text>
                    <Image source={icons.iconQuestion}
                        style={{ height: 30, width: 30 }} tintColor={'white'}
                    />
                </View>

                {/* Body */}
                <View style={styles.body}>
                    <View style={styles.body_Text}>
                        <Text style={{ color: 'white', fontSize: fontSizes.h3 }}>Welcome to my project</Text>
                        <Text style={{ color: 'white', fontSize: fontSizes.h1, fontWeight: 600, marginVertical: 10 }}>
                            The first study react native Hii.
                        </Text>
                        <Text style={{ color: 'white', fontSize: fontSizes.h4 }}>Pease select your account typeee</Text>
                    </View>

                    <View style={styles.body_buttons}>
                        {accountType.map((account) =>
                            <UIbutton
                                key={account.name}
                                title={account.name}
                                isChecked={account.isChecked}
                                press={() => press(account)}
                            />
                        )}
                    </View>

                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.footer_button}>
                        <UIbutton
                            press={()=>{
                                navigate('Login')
                                // alert('jjj')
                            }}
                            title={'LOGIN'} />
                    </View>
                    <View>
                        <Text style={{ color: 'white', marginTop: 50, }}>
                            Want to register new account?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            alert('press Register')
                        }}>
                            <Text style={{
                                color: 'white', alignSelf: 'center',
                                marginTop: 20,
                                textDecorationLine: 'underline',
                                color: 'red'
                            }}>
                                Register
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    BgrImage: {
        flex: 1
    },
    head: {
        flex: 1.3,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    body: {
        flex: 8
    },
    body_Text: {
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body_buttons: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        flex: 3,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_button: {
        width: '100%',
        position: 'absolute',
        top: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Welcome