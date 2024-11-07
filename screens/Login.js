import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import { isValiEmail, isValiPassword } from '../utilies/Validate'
import {
    View, Text, Image, StyleSheet, ImageBackground,
    TouchableOpacity, TextInput, KeyboardAvoidingView,
    ScrollView, Platform
} from 'react-native'
import { Back } from '../components'
function Login(props) {
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    //state save infor email-pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //state show password
    const [showpass, setShowpass] = useState(true)

    const ValidateOk = () => (email.length > 0 && password.length > 0 && isValiEmail(email) && isValiPassword(password))

    //navigation
    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Back
                nameScreen={'Login'}
                onPress={() => { goBack() }} />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <StatusBar backgroundColor='darkgray' />
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h1,
                            fontWeight: 700, width: '50%',
                            alignSelf: 'center',
                            marginLeft: 20
                        }}>Already have an account?
                        </Text>
                        <Image source={images.computer} style={{
                            height: 120, width: 120,
                            alignSelf: 'center',
                            marginTop: 10, marginLeft: 20,
                            tintColor: 'lightgreen'
                        }} />
                    </View>

                    {/* body */}
                    <View style={styles.body}>
                        <View style={styles.groupEmail}>
                            <Text style={{
                                fontSize: fontSizes.h4,
                                color: 'black'
                            }}>Email:</Text>
                            <TextInput placeholder='khoalon89@gmail.com'
                                placeholderTextColor={colors.placeHolder}
                                onChangeText={(text) => {
                                    setErrorEmail(isValiEmail(text) ? '' : 'email not in correct format')
                                    setEmail(text)
                                }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
                            {/* error */}
                            <Text style={{ color: 'red' }}>{errorEmail}</Text>
                        </View>
                        <View style={styles.groupPassword}>
                            <Text style={{
                                fontSize: fontSizes.h4,
                                color: 'black',
                                marginVertical: 10

                            }}>Password:
                            </Text>

                            <TextInput placeholder='Enter your password'
                                placeholderTextColor={colors.placeHolder}
                                secureTextEntry={showpass}
                                onChangeText={(text) => {
                                    setErrorPassword(isValiPassword(text) ? '' : 'Password must be at least 3 character')
                                    setPassword(text)
                                }}
                            />
                            <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
                            {/* error */}
                            <Text style={{ color: 'red' }}>{errorPassword}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowpass(!showpass)
                                }}
                                style={{ position: 'absolute', bottom: 22, right: 10 }}
                            >
                                <View style={{ height: 25, width: 25, }}>
                                    <Ionicons name='eye-outline' size={25} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.groupLogin}>
                            <TouchableOpacity style={[styles.btnlogin,
                            { backgroundColor: ValidateOk() ? 'aqua' : colors.disable }]}
                                disabled={!ValidateOk()}
                                onPress={() => {
                                    // alert(`Email:${email} , Password:${password}`)
                                    navigate('UItab')
                                }}
                            >
                                <Text style={{
                                    fontSize: fontSizes.h2,
                                    textAlign: 'center', marginTop: 4
                                }}>
                                    Login
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={
                                () => {
                                    navigate('Register')
                                }
                            }>
                                <Text style={{
                                    fontSize: fontSizes.h5, textAlign: 'center',
                                    marginTop: 10,
                                    color: colors.register,
                                    textDecorationLine: 'underline'
                                }}>
                                    New user?Register now
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* footer */}
                    <View style={styles.footer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black', textAlign: 'center' }}></View>
                            <View>
                                <Text style={{ fontSize: fontSizes.h4 }}>
                                    Use other methods
                                </Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
                        </View>

                        <View style={styles.icon}>
                            <Ionicons name='logo-facebook' size={35} color={colors.facebook} style={{ marginRight: 10 }} />
                            <Ionicons name='logo-google' size={35} color={colors.google} />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        flexGrow: 1,
        // flexGrow: 1 được thêm vào để đảm bảo rằng nội dung sẽ chiếm toàn bộ không gian có sẵn trong ScrollView
        justifyContent: 'center',
    },
    header: {
        marginTop: 35,
        flex: 4,
        flexDirection: 'row',
    },


    body: {
        flex: 8,
        paddingTop: 50,

    },

    groupEmail: {
        marginHorizontal: 40
    },
    groupPassword: {
        marginHorizontal: 40,
        marginTop: 10
    },
    btnlogin: {
        marginTop: 40,
        height: 40,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 15
    },
    groupLogin: {
        paddingTop: 30
    },


    footer: {
        flex: 3,
        // backgroundColor:'red'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }

})

export default Login