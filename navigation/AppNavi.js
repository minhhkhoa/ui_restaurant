import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UItab from './UItab';
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import {
  View, Text, StyleSheet,
  ScrollView, FlatList, Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Welcome, Login, Register, Messenger } from '../screens'
import { Back } from '../components'

const Stack = createNativeStackNavigator()

function AppNavi(props) {
 // Function to update show state

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Back" component={Back} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Messenger" component={Messenger} options={{ headerShown: false }} />
        <Stack.Screen name="UItab" component={UItab} options={{ headerShown: false }} />
        {/* <Stack.Screen name="UItab" options={{ headerShown: false }}>
          {props => <UItab {...props} Show={Show} show={show} handleShow={handleShow}  />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavi